import bcryptjs from 'bcryptjs'
import User from '../models/user.js'

export const createUser = async (req, res) => {
  const { name, email } = req.body
  const newUser = await User.create({ name, email })
  await newUser.createCart()
  res.send(newUser)
}

export const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email } })
  if (!user) {
    return res.send('User with this email was not found!')
  }

  const isPasswordCorrect = await bcryptjs.compare(password, user.password)

  if (!isPasswordCorrect) {
    return res.send('Password is wrong!')
  }

  req.session.isLoggedIn = true
  req.session.user = user
  req.session.save(() => res.send('You was successfully login! '))
}

export const logout = async (req, res) => {
  req.session.destroy()
  res.send('You was logout!')
}

export const signup = async (req, res) => {
  const { email, password, passwordConfirmation } = req.body

  const userWithThisEmail = await User.findOne({ where: { email }})

  if (userWithThisEmail) {
    res.send('User with this email already exist!')
  }

  const cryptPassword = await bcryptjs.hash(password, 12)

  const newUser = await User.create({ email, password: cryptPassword })
  res.send(newUser)
}