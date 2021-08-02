const Joi = require('joi')

const validSchemaAdd = Joi.object({
  question: Joi.string()
    .required(),
  answers: Joi.array()
    .required(),
  rightAnswer: Joi.string()
    .required(),
  questionType: Joi.string()
    .required()
})

module.exports = validSchemaAdd
