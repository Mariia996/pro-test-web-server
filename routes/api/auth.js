const express = require('express')

const { auth: ctrl } = require('../../controllers')

// const useAuth = require('../../middleware')

const router = express.Router()

// router.post('/register', express.json(), )

// router.post('/login', express.json(), )

// router.post('/logout', useAuth, ctrl.logout)

module.exports = router
