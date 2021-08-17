/* eslint-disable no-unused-vars */
require('dotenv').config()
const Hapi = require('@hapi/hapi')
const Jwt = require('@hapi/jwt')

// music
const musics = require('./api/musics')
const MusicsService = require('./services/postgres/MusicService')
const MusicValidator = require('./validator/music')

// users
const users = require('./api/users')
const UsersService = require('./services/postgres/UsersService')
const UsersValidator = require('./validator/users')

// authentication
const authentications = require('./api/authentications')
const AuthenticationsService = require('./services/postgres/AuthenticationsService')
const TokenManager = require('./tokenize/tokenManager')
const AuthenticationsValidator = require('./validator/authentications')

// playlists
const playlists = require('./api/playlists')
const PlaylistValidator = require('./validator/playlists')
const PlaylistsService = require('./services/postgres/playlistsService')

// Playlistsongs
const playlistsongs = require('./api/playlistsongs')
const PlaylistsongsValidator = require('./validator/playlistsongs')
const PlaylistsongsService = require('./services/postgres/playlistsongsService')

const init = async () => {
  const musicsService = new MusicsService()
  const usersService = new UsersService()
  const authenticationsService = new AuthenticationsService()
  const playlistsService = new PlaylistsService()
  const playlistsongsService = new PlaylistsongsService()

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  await server.register([
    {
      plugin: Jwt
    }
  ])

  // mendefinisikan strategy autentikasi jwt
  server.auth.strategy('musicsapp_jwt', 'jwt', {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      maxAgeSec: process.env.ACCESS_TOKEN_AGE
    },
    validate: (artifacts) => ({
      isValid: true,
      credentials: {
        id: artifacts.decoded.payload.id
      }
    })
  })

  await server.register([
    {
      plugin: musics,
      options: {
        service: musicsService,
        validator: MusicValidator
      }
    },
    {
      plugin: users,
      options: {
        service: usersService,
        validator: UsersValidator
      }
    },
    {
      plugin: authentications,
      options: {
        authenticationsService,
        usersService,
        tokenManager: TokenManager,
        validator: AuthenticationsValidator
      }
    },
    {
      plugin: playlists,
      options: {
        service: playlistsService,
        validator: PlaylistValidator
      }
    },
    {
      plugin: playlistsongs,
      options: {
        service: playlistsongsService,
        validator: PlaylistsongsValidator
      }
    }
  ])

  await server.start()
  console.log(`server berjalan pada ${server.info.uri}`)
}

init()
