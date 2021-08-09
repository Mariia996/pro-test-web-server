const { addManyQuestions } = require('../../helpers')
const { tests: service } = require('../../services')

// http://localhost:4000/api/v1/tests/many?questionType=practice

const addMany = async (req, res, next) => {
  const { body } = req
  const { questionType } = req.query
  try {
    await addManyQuestions(body, questionType)
    const data = await service.getAll({ questionType })
    res.json({
      status: 'success',
      code: 201,
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addMany
