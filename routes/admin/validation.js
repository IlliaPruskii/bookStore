import Joi from 'joi'

export const createBookSchema = Joi.object({
  name: Joi.string().required(),
  author: Joi.string(),
  price: Joi.number().required(),
  image: Joi.string()
})