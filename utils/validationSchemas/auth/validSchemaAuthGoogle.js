const Joi = require('joi')

const validSchemaAuthGoogle = Joi.object({
  tokenId: Joi.string().required(),
})

module.exports = validSchemaAuthGoogle
