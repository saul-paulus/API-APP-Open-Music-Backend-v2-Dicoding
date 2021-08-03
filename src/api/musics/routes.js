const routes = (handler) => [
  {
    method: 'POST',
    path: '/song',
    handler: handler.postMusicHandler,
    options: {
      auth: 'notesapp_jwt'
    }
  },
  {
    method: 'GET',
    path: '/song',
    handler: handler.getAllMusicsHandler,
    options: {
      auth: 'notesapp_jwt'
    }

  },
  {
    method: 'GET',
    path: '/song/{songId}',
    handler: handler.getMusicByIdHandler,
    options: {
      auth: 'notesapp_jwt'
    }

  },
  {
    method: 'PUT',
    path: '/song/{songId}',
    handler: handler.putMusicByIdHandler,
    options: {
      auth: 'notesapp_jwt'
    }

  },
  {
    method: 'DELETE',
    path: '/song/{songId}',
    handler: handler.deleteMusicByIdHandler,
    options: {
      auth: 'notesapp_jwt'
    }

  }
]

module.exports = routes
