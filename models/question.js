const { model } = require('mongoose')

const { questionSchema } = require('./schemas')

const Question = model('question', questionSchema)

module.exports = Question
