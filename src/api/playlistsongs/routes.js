const routes = (handler) => [
  {
    method: 'POST',
    path: '/playlists/{playlistId}/songs',
    handler: handler.postPlaylistsongHandler,
    options: {
      auth: 'musicsapp_jwt'
    }
  },
  {
    method: 'GET',
    path: '/playlists/{playlistId}/songs',
    handler: handler.getPlaylistsongsHandler,
    options: {
      auth: 'musicsapp_jwt'
    }
  },
  {
    method: 'DELETE',
    path: '/playlists/{playlistId}/songs',
    handler: handler.deletePlaylistsongByIdHandler,
    options: {
      auth: 'musicsapp_jwt'
    }
  }
]

module.exports = routes
