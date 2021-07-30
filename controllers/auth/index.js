
const register = require('./register')
const login = require('./login')
const logout = require('./logout')

const auth = {
  register,
  login,
  logout
}

module.exports = auth
