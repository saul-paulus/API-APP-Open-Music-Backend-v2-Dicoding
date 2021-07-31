require('dotenv').config()

const Hapi = require('@hapi/hapi')
const musics = require('./api/musics')
const MusicsService = require('./services/postgres/MusicService')
const MusicValidator = require('./validator/music')

const users = require('./api/users')
const UserService = require('./services/postgres/UserService')
const UserValidator = require('./validator/users')

const init = async () => {
  const musicsService = new MusicsService()
  const userService = new UserService()

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
    }
  ])

  await server.start()
  console.log(`server berjalan pada ${server.info.uri}`)
}

init()
