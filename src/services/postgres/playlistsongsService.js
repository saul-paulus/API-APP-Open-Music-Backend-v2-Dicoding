const { Pool } = require('pg')
const { nanoid } = require('nanoid')
const InvariantError = require('../../exceptions/InvariantError')

class PlaylistsongsService {
  constructor () {
    this._pool = new Pool()
  }

  async addPlaylistsong (songId, playlistId) {
    const id = `playlistsong-${nanoid(16)}`

    const query = {
      text: 'INSERT INTO playlistsongs VALUES($1, $2, $3) RETURNING id',
      values: [id, songId, playlistId]
    }

    const result = await this._pool.query(query)

    if (!result.rows.length) {
      throw new InvariantError('Lagu gagal ditambahkan')
    }

    return result.rows[0].id
  }

  async getPlaylistsongs (playlistId) {
    const query = {
      text: 'SELECT * FROM playlistsongs WHERE id = $1',
      values: [playlistId]
    }

    const result = await this._pool.query(query)

    return result.rows
  }

  async deletePlaylistsongById (songId) {
    const query = {
      text: 'DELETE FROM playlistsongs WHERE song_id = $1',
      values: [songId]
    }

    const result = await this._pool.query(query)

    if (!result.rows.length) {
      throw new InvariantError('Kolaborasi gagal dihapus')
    }
  }

  async verifyPlaylistsong (songId, playlistId) {
    const query = {
      text: 'SELECT * FROM collaborations WHERE song_id = $1 AND playlist_id = $2',
      values: [songId, playlistId]
    }
    const result = await this._pool.query(query)

    if (!result.rows.length) {
      throw new InvariantError('Kolaborasi gagal diverifikasi')
    }
  }
}

module.exports = PlaylistsongsService
