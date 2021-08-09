/* eslint-disable object-curly-spacing */
const express = require('express')

const { useAuth } = require('../middleware')

const {users: ctrl} = require('../controllers')

const router = express.Router()

router.get('/current', useAuth, ctrl.getCurrentUser)

module.exports = router
