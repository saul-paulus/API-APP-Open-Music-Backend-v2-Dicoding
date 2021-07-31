const InvariantError = require('../../exceptions/InvariantError')
const { UserPayloadSchema } = require('./schema')

const UserValidator = {
  validateUserPayload: (payload) => {
    const validarionResult = UserPayloadSchema.validate(payload)

    if (validarionResult.error) {
      throw new InvariantError(validarionResult.error.message)
    }
  }
}

module.exports = UserValidator
