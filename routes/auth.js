/* eslint-disable object-curly-spacing */
const express = require('express')

const { useAuth } = require('../middleware')

const {auth: ctrl} = require('../controllers')

const router = express.Router()

router.post('/register', express.json(), ctrl.register)

router.post('/login', express.json(), ctrl.login)

router.post('/logout', useAuth, ctrl.logout)

router.post('/googlelogin', express.json(), ctrl.googleLogin)

module.exports = router
