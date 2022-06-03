import express from 'express'
import joiValidation from 'express-joi-validation'
import { login, logout, signup, createUser } from '../../controllers/user.js'
import { createUserSchema } from './validation.js'

const validator = joiValidation.createValidator({})

const router = express.Router()

router.post('/create', validator.body(createUserSchema), createUser)

router.post('/login', login)

router.post('/logout', logout)

router.post('/signup', signup)

export default router