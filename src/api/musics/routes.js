const routes = (handler) => [
  {
    method: 'POST',
    path: '/songs',
    handler: handler.postMusicHandler,
    options: {
      auth: 'musicsapp_jwt'
    }
  },
  {
    method: 'GET',
    path: '/songs',
    handler: handler.getAllMusicsHandler,
    options: {
      auth: 'musicsapp_jwt'
    }

  },
  {
    method: 'GET',
    path: '/songs/{songId}',
    handler: handler.getMusicByIdHandler,
    options: {
      auth: 'musicsapp_jwt'
    }

  },
  {
    method: 'PUT',
    path: '/songs/{songId}',
    handler: handler.putMusicByIdHandler,
    options: {
      auth: 'musicsapp_jwt'
    }

  },
  {
    method: 'DELETE',
    path: '/songs/{songId}',
    handler: handler.deleteMusicByIdHandler,
    options: {
      auth: 'musicsapp_jwt'
    }

  }
]

module.exports = routes
