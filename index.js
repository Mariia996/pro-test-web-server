/* eslint-disable object-curly-spacing */
const express = require('express')
const cors = require('cors')

const {authRouter, usersRouter, testsRouter} = require('./routes')

const app = express()

app.use(cors())

app.use('/api/v1/auth', authRouter)

app.use('/api/v1/users', usersRouter)

app.use('/api/v1/tests', testsRouter)

app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  })
})

app.use((err, _, res, __) => {
  const {code = 500, message = 'Server error'} = err
  res.status(code).json({
    status: 'fail',
    code,
    message,
  })
})

module.exports = app
