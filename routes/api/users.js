/* eslint-disable object-curly-spacing */
const express = require('express')

// const useAuth = require('../../middleware/useAuth')

const {users: ctrl} = require('../../controllers')

const router = express.Router()

router.get('/current', ctrl.getCurrentUser)

module.exports = router
