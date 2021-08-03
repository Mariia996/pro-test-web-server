// eslint-disable-next-line object-curly-spacing
const {tests: service} = require('../../services')

const getTestResult = async (req, res, next) => {
  //   const answers = req.body //будет приходить массив объектов(id вопроса, ответ на вопрос)
  const answers = [
    {
      _id: '6107d49073048a242080648e',
      userAnswer:
        'Answers the question whether the product is being created correctly in terms of customer expectations',
    },
    {
      _id: '6107d49073048a242080648f',
      userAnswer: 'All requirements must be known at the beginning of the project life cycle',
    },
  ]
  try {
    const questions = await service.getAll()

    const answerId = answers.map(answer => answer._id)
    const answerUser = answers.map(answer => answer.userAnswer)

    const oneQuestions = questions.find(question => answerId.includes(question.id))

    const rightAnswers = questions
      .filter(question => answerId.includes(question.id))
      .filter(question => answerUser.includes(question.rightAnswer))

    res.json({
      status: 'success',
      code: 200,
      data: {
        rightAnswers: rightAnswers,
        type: oneQuestions.questionType,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getTestResult
