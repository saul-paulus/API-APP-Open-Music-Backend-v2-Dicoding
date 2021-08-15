const routes = (handler) => [
  {
    method: 'POST',
    path: '/playlists/{playlistId}/songs',
    handler: handler.postPlaylistsongHandler,
    options: {
      auth: 'notesapp_jwt'
    }
  },
  {
    method: 'GET',
    path: ' /playlists/{playlistId}/songs',
    handler: handler.getPlaylistsongHandler,
    options: {
      auth: 'notesapp_jwt'
    }
  },
  {
    method: 'DELETE',
    path: ' /playlists/{playlistId}/songs',
    handler: handler.deletePlaylistsongByIdHandler,
    options: {
      auth: 'notesapp_jwt'
    }
  }
]

module.exports = routes
