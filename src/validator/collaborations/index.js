const { collaborationPayloadSchema } = require('./schema')
const InvariantError = require('../../exceptions/InvariantError')

const collaborationsValidator = {
  validateCollaorationPayload: (payload) => {
    const validationResult = collaborationPayloadSchema.validate(payload)

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message)
    }
  }
}

module.exports = collaborationsValidator
