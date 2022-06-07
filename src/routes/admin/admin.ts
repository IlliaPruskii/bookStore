import express from 'express'
import joiValidation from 'express-joi-validation'
import { createBook, getBooks } from '../../controllers/admin.js'
import { createBookSchema } from './validation.js'

const validator = joiValidation.createValidator({})

const router = express.Router()

router.get('/', getBooks)

router.post('/createBook', validator.body(createBookSchema), createBook)

export default router