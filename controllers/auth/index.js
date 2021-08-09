const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const googleLogin = require('./googleLogin')

const auth = {
  register,
  login,
  logout,
  googleLogin
}

module.exports = auth
