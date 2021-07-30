
/* eslint-disable object-curly-spacing */
const express = require('express')

const {auth: ctrl} = require('../../controllers')

const router = express.Router()

router.post('/register', express.json(), ctrl.register)

router.post('/login', express.json(), ctrl.login)

// router.post('/logout', useAuth, ctrl.logout)

module.exports = router
