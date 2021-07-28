const express = require('express')
const router = express.Router()

const { tests: ctrl } = require('../../controllers')

router.get('/theory', ctrl.getTheoryTests)

module.exports = router
