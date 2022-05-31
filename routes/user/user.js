const express = require('express')
const userController = require('../../controllers/user')
const validator = require('express-joi-validation').createValidator({})
const { createUserSchema } = require('./validation')

const router = express.Router()

router.post('/create', validator.body(createUserSchema), userController.createUser)

module.exports = router