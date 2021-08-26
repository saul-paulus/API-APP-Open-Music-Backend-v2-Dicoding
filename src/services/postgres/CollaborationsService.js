const { Pool } = require('pg')
const { nanoid } = require('nanoid')
const InvariantError = require('../../exceptions/InvariantError')

class CollaborationsService {
  constructor () {
    this._pool = new Pool()
  }

  // TODO menambah collaboration
  async addCollaboration (songId, userId) {
    const id = `collab-${nanoid}`

    const query = {
      text: 'INSERT INTO collaborations VALUES($1, $2, $3) RETURNING id',
      values: [id, songId, userId]
    }

    const result = await this._pool.query(query)

    if (!result.rows.length) {
      throw new InvariantError('Kolaborasi gagal ditambahkan')
    }

    return result.rows[0].id
  }

  // TODO menghapus collaboration
  async deleteCollaboration (songId, userId) {
    const query = {
      text: 'DELETE FROM collaborations WHERE song_id = $1 AND user_id = $2 RETURNING id',
      values: [songId, userId]
    }

    const result = await this._pool.query(query)

    if (!result.rowCount) {
      throw new InvariantError('Kolaborasi gagal dihapus, songId tidak ditemukan')
    }
  }

  // TODO verifyCollaboration
  async verifyCollaborator (songId, userId) {
    const query = {
      text: 'SELECT * FROM collaborations WHERE song_id = $1 AND user_id = $2',
      values: [songId, userId]
    }

    const result = await this._pool.query(query)

    if (!result.rows.length) {
      throw new InvariantError('Kolaborasi gagal diverifikasi')
    }
  }
}

module.exports = CollaborationsService
