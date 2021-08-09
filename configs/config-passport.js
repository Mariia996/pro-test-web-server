/* eslint-disable object-curly-spacing */
const passport = require('passport')
const {ExtractJwt, Strategy} = require('passport-jwt')
require('dotenv').config()
const {TOKEN_KEY} = process.env

const {users: service} = require('../services')

const settings = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: TOKEN_KEY,
}

passport.use(
  new Strategy(settings, async (payload, done) => {
    try {
      const user = await service.findById(payload.id)
      if (!user) {
        throw new Error('User not found')
      }
      done(null, user)
    } catch (error) {
      done(error)
    }
  }),
)
