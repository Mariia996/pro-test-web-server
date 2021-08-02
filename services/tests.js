const { Question } = require('../models')

const getAll = (filter = {}) => {
  return Question.find(filter)
}

const getOne = (filter) => {
  return Question.findOne(filter)
}

const add = (body) => {
  return Question.create(body)
}

module.exports = {
  add,
  getOne,
  getAll
}
