const express = require('express')
const router = express.Router()

const { questions: ctrl } = require('../../controllers')

router.get('/all/:questionType', ctrl.getTests)

router.post('/', express.json(), ctrl.addOne)

router.post('/many', express.json(), ctrl.addMany)

router.post('/result', express.json(), ctrl.getResult)

module.exports = router
