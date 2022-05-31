const express = require('express')
const adminController = require('../../controllers/admin')
const validator = require('express-joi-validation').createValidator({})
const { createBookSchema } = require('./validation')

const router = express.Router()

router.get('/', adminController.getBooks)

router.post('/createBook', validator.body(createBookSchema), adminController.createBook)

module.exports = router