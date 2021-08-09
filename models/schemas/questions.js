const { Schema } = require('mongoose')

const questionSchema = Schema({
  question: {
    type: String,
    required: [true, 'Question must exist']
  },
  answers: {
    type: [String],
    required: [true, 'Answers must exist']
  },
  rightAnswer: {
    type: String,
    required: [true, 'Right answer must exist']
  },
  questionType: {
    type: String,
    enum: ['theory', 'practice'],
    required: [true, 'Question type must exist']
  }
})

module.exports = questionSchema
