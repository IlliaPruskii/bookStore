import Book from '../models/book.js'
import User from '../models/user.js'

export const getCartItems = async (req: any, res: any) => {
  const { userId = 1 } = req.query
  const user: any = await User.findByPk(userId)
  const cart: any = await user.getCart()
  const books = await cart.getBooks()
  res.send(books)
}

export const addBookToCart = async (req: any, res: any) => {
  const { userId = 1, bookId } = req.body

  let newQuantity = 1;
  let book;

  const user: any = await User.findByPk(userId)
  const cart: any = await user.getCart()
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