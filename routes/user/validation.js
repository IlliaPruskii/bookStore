const Joi = require('joi')

exports.createUserSchema = Joi.object({
  email: Joi.string().required(),
  name: Joi.string()
})