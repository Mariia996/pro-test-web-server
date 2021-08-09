const { tests: service } = require('../services')

function addManyQuestions(array, questionType) {
  array.forEach((item) => {
    service.add({ ...item, questionType })
  })
}

module.exports = addManyQuestions
