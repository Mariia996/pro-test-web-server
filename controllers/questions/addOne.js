const { tests } = require('../../utils/validationSchemas')
const { tests: service } = require('../../services')

const addOne = async (req, res, next) => {
  const { body } = req
  try {
    const { error } = tests.validSchemaAdd.validate(body)
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad request'
      })
    }
    const { question } = body
    const result = await service.getOne({ question })
    if (result) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'This question already exist'
      })
    }
    const data = await service.add(body)
    res.json({
      status: 'success',
      code: 201,
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addOne
