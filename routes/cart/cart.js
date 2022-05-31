const express = require('express')
const cartController =  require('../../controllers/cart')

const router = express.Router()

router.get('/', cartController.getCartItems)

router.post('/add', cartController.addBookToCart)

module.exports = router