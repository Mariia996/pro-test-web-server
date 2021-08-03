const {Question} = require('../models')

const getAll = (filter = {}) => {
  return Question.find(filter)
}

const getOne = filter => {
  return Question.findOne(filter)
}

const add = body => {
  return Question.create(body)
}

const getById = body => {
  return Question.findById(body)
}

module.exports = {
  add,
  getOne,
  getAll,
  getById,
}
