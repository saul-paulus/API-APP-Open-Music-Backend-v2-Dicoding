const { Pool } = require('pg')
const { nanoid } = require('nanoid')
const InvariantError = require('../../exceptions/InvariantError')
const NotFoundError = require('../../exceptions/NotFoundError')

class PlaylistsongsService {
  constructor () {
    this._pool = new Pool()
  }

  async addPlaylistsong (playlistId, songId) {
    const id = `playlistsong-${nanoid(16)}`

    const query = {
      text: 'INSERT INTO playlistsongs VALUES($1, $2, $3) RETURNING id',
      values: [id, playlistId, songId]
    }

    const result = await this._pool.query(query)

    if (!result.rows[0].id) {
      throw new InvariantError('Lagu gagal ditambahkan ke playlist')
    }

    return result.rows[0].id
  }

  async getPlaylistsongs (playlistId) {
    const query = {
      text: 'SELECT songs.id, songs.title, songs.performer FROM playlistsongs LEFT JOIN songs ON songs.id = playlistsongs.song_id WHERE playlistsongs.playlist_id = $1',
      values: [playlistId]
    }

    const result = await this._pool.query(query)

    return result.rows
  }

  async deletePlaylistsongById (playlistId, songId) {
    const query = {
      text: 'DELETE FROM playlistsongs WHERE playlist_id = $1 AND song_id = $2 RETURNING id',
      values: [songId, playlistId]
    }

    const result = await this._pool.query(query)

    if (!result.rows.length) {
      throw new InvariantError('Lagu gagal dihapus dari playlist, Id tidak ditemukan')
    }
  }
}

module.exports = PlaylistsongsService
