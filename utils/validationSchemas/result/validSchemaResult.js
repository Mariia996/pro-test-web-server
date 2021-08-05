const Joi = require('joi')

const validSchemaResult = Joi.array().items(
  Joi.object({
    _id: Joi.string().required(),
    answer: Joi.string().required(),
  }),
)

module.exports = validSchemaResult
