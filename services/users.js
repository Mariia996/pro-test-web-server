/* eslint-disable object-curly-spacing */
const {User} = require('../models')

const getOne = filter => {
  return User.findOne(filter)
}

const add = ({password, ...data}) => {
  const newUser = new User(data)
  newUser.setPassword(password)
  return newUser.save()
}

const findById = id => {
  return User.findById(id)
}

const update = (id, token) => {
  return User.findByIdAndUpdate(id, token)
}

module.exports = {
  getOne,
  add,
  findById,
  update,
}
