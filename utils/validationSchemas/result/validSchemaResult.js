const Joi = require('joi')

const validSchemaResult = Joi.array()
  .items(
    Joi.object({
      _id: Joi.string().required(),
      userAnswer: Joi.string().required(),
    }),
  )
  .min(12)
  .required()

module.exports = validSchemaResult
