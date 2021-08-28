const ClientError = require('../../exceptions/ClientError')

class PlaylistsongsHandler {
  constructor (service, validator) {
    this._service = service
    this._validator = validator

    this.postPlaylistsongHandler = this.postPlaylistsongHandler.bind(this)
    this.getPlaylistsongsHandler = this.getPlaylistsongsHandler.bind(this)
    this.deletePlaylistsongByIdHandler = this.deletePlaylistsongByIdHandler.bind(this)
  }

  async postPlaylistsongHandler (request, h) {
    try {
      this._validator.validatePlaylistsongPayload(request.payload)

      const { id: credentialId } = request.auth.credentials
      const { songId } = request.payload
      const { playlistId } = request.params

      await this._service.verifySongOnPlaylistsong(songId)

      await this._service.verifyPlaylistsongAccess(playlistId, credentialId)
      await this._service.addPlaylistsong(playlistId, songId)

      const response = h.response({
        status: 'success',
        message: 'Lagu berhasil ditambahkan ke playlist'
      })

      response.code(201)
      return response
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message
        })
        response.code(error.statusCode)
        return response
      }
      // server error
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.'
      })
      response.code(500)
      console.error(error)
      return response
    }
  }

  async getPlaylistsongsHandler (request) {
    const { playlistId } = request.params
    const { id: credentialId } = request.auth.credentials

    await this._service.verifyPlaylistsongAccess(playlistId, credentialId)
    const playlistsong = await this._service.getPlaylistsongs(playlistId)

    return {
      status: 'success',
      data: {
        playlistsong
      }
    }
  }

  async deletePlaylistsongByIdHandler (request, h) {
    try {
      const { songId } = request.payload
      const { playlistId } = request.params
      const { id: credentialId } = request.auth.credentials

      await this._service.verifySongOnPlaylistsong(songId)

      await this._service.verifyPlaylistsongAccess(playlistId, credentialId)
      await this._service.deletePlaylistsongById(playlistId, songId)

      return {
        status: 'success',
        message: 'Lagu berhasil dihapus dari playlist'
      }
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message
        })
        response.code(error.statusCode)
        return response
      }

      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.'
      })
      response.code(500)
      console.error(error)
      return response
    }
  }
}

module.exports = PlaylistsongsHandler
