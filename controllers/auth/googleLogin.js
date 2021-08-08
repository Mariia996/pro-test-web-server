const { OAuth2Client } = require('google-auth-library')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const { auth } = require('../../utils/validationSchemas')
const { users: service } = require('../../services')

const { REACT_APP_GOOGLE_CLIENT_ID } = process.env
const client = new OAuth2Client(REACT_APP_GOOGLE_CLIENT_ID)

const googleLogin = async (req, res, next) => {
  const { tokenId } = req.body
  try {
    const { error } = await auth.validSchemaAuthGoogle.validate(req.body)
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad request'
      })
    }
    const result = await client.verifyIdToken({ idToken: tokenId, audience: REACT_APP_GOOGLE_CLIENT_ID })
    const { email_verified, email } = result.payload
    if (email_verified) {
      const user = await service.getOne({ email })
      if (!user) {
        return res.status(404).json({
          status: 'error',
          code: 404,
          message: 'User not found'
        })
      }
      const { TOKEN_KEY } = process.env
      const id = user._id
      const payload = { id }

      const token = jwt.sign(payload, TOKEN_KEY)
      await service.update(id, { token })

      res.json({
        status: 'success',
        code: 200,
        data: {
          user: {
            email: user.email,
          },
          token,
        },
      })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = googleLogin
