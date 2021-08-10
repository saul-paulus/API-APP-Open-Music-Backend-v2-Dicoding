const routes = (handler) => [
  {
    method: 'POST',
    path: '/song',
    handler: handler.postMusicHandler,
    options: {
      auth: 'musicsapp_jwt'
    }
  },
  {
    method: 'GET',
    path: '/song',
    handler: handler.getAllMusicsHandler,
    options: {
      auth: 'musicsapp_jwt'
    }

  },
  {
    method: 'GET',
    path: '/song/{songId}',
    handler: handler.getMusicByIdHandler,
    options: {
      auth: 'musicsapp_jwt'
    }

  },
  {
    method: 'PUT',
    path: '/song/{songId}',
    handler: handler.putMusicByIdHandler,
    options: {
      auth: 'musicsapp_jwt'
    }

  },
  {
    method: 'DELETE',
    path: '/song/{songId}',
    handler: handler.deleteMusicByIdHandler,
    options: {
      auth: 'musicsapp_jwt'
    }

  }
]

module.exports = routes
