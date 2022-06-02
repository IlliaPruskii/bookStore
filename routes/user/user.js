const express = require('express')
const userController = require('../../controllers/user')
const validator = require('express-joi-validation').createValidator({})
const { createUserSchema } = require('./validation')

const router = express.Router()

router.post('/create', validator.body(createUserSchema), userController.createUser)

router.post('/login', userController.login)

router.post('/logout', userController.logout)

router.post('/signup', userController.signup)

module.exports = router