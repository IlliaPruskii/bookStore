import Joi from 'joi'

export const createUserSchema = Joi.object({
  email: Joi.string().required(),
  name: Joi.string()
})