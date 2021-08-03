require('dotenv').config()
const Hapi = require('@hapi/hapi')
const Jwt = require('@hapi/jwt')

// music
const musics = require('./api/musics')
const MusicsService = require('./services/postgres/MusicService')
const MusicValidator = require('./validator/music')

// users
const users = require('./api/users')
const UserService = require('./services/postgres/UserService')
const UserValidator = require('./validator/users')

// authentication

const authentications = require('./api/authentications')
const AuthenticationsService = require('./services/postgres/AuthenticationsService')
const TokenManager = require('./tokenize/tokenManager')
const AuthenticationsValidator = require('./validator/authentications')

const init = async () => {
  const musicsService = new MusicsService()
  const userService = new UserService()
  const authenticationsService = new AuthenticationsService()

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
  server.auth.strategy('notesapp_jwt', 'jwt', {
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
        service: userService,
        validator: UserValidator
      }
    },
    {
      plugin: authentications,
      options: {
        authenticationsService,
        userService,
        tokenManager: TokenManager,
        validator: AuthenticationsValidator
      }
    }
  ])

  await server.start()
  console.log(`server berjalan pada ${server.info.uri}`)
}

init()
