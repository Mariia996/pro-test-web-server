const { tests: service } = require('../../services')
const { getRandomTests } = require('../../helpers')

const getTests = async (req, res, next) => {
  const { questionType } = req.params
  try {
    const tests = await service.getAll({ questionType })
    const maxNumber = tests.length - 1
    const result = await getRandomTests(tests, maxNumber, 0)
    res.json({
      status: 'success',
      code: 200,
      data: {
        tests: result,
        total: result.length
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getTests
