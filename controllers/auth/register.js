/* eslint-disable object-curly-spacing */
const jwt = require('jsonwebtoken')
const {users: service} = require('../../services')
const {auth} = require('../../utils/validationSchemas')

const register = async (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  const {email, password} = req.body
  try {
    const {error} = auth.validSchemaAuth.validate({email, password})
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad request',
      })
    }
    const user = await service.getOne({email})
    if (user) {
      res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Already register',
      })
      return
    }
    const newUser = await service.add(req.body)
    const id = newUser._id
    const payload = {id}
    const {TOKEN_KEY} = process.env

    const token = jwt.sign(payload, TOKEN_KEY)
    await service.update(id, {token})

    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'Success create',
      data: {
        user: {
          email: newUser.email,
        },
        token,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = register
