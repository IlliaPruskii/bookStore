import express from 'express'
import { getCartItems, addBookToCart } from '../../controllers/cart.js'

const router = express.Router()

router.get('/', getCartItems)

router.post('/add', addBookToCart)

export default router