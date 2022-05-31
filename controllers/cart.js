const Book = require("../models/book")
const User = require("../models/user")


exports.getCartItems = async (req, res) => {
  const { userId = 1 } = req.query
  const user = await User.findByPk(userId)
  const cart = await user.getCart()
  const books = await cart.getBooks()
  res.send(books)
}

exports.addBookToCart = async (req, res) => {
  const { userId = 1, bookId } = req.body

  let newQuantity = 1;
  let book;

  const user = await User.findByPk(userId)
  const cart = await user.getCart()
  const books = await cart.getBooks({ where: { id: bookId } })

  if (books.length > 0) {
    book = books[0]
    newQuantity = books[0].cartItem.quantity + 1
  } else {
    book = await Book.findByPk(bookId)
  }

  const result = await cart.addBook(book, {
    through: { quantity: newQuantity }
  })
  res.send(result)
}