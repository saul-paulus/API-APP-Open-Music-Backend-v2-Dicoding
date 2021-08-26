const Joi = require('joi')

const collaborationPayloadSchema = Joi.object({
  songId: Joi.string().required(),
  userId: Joi.string().required()
})

module.exports = { collaborationPayloadSchema }
