const User = require('../models/user')

exports.createUser = async (req, res) => {
  const { name, email } = req.body
  const newUser = await User.create({ name, email })
  await newUser.createCart()
  res.send(newUser)
}