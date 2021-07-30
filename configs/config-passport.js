const passport = require('passport')
const { ExtractJwt, Strategy } = require('passport-jwt')
require('dotenv').config()

const User = require('../models')

const { JWT_SECRED } = process.env

const settings = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRED,
}

passport.use(
  new Strategy(settings, async (payload, done) => {
    try {
      const user = await User.findById(payload.userId)
      if (!user) {
        throw new Error('User not found')
      }
      done(null, user)
    } catch (error) {
      done(error)
    }
  })
)
