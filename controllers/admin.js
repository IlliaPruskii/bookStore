import Book from '../models/book.js'

export const getBooks = (req, res) => {
  Book.findAll()
    .then((books) => {
      res.send(books)
    })
}

export const createBook = async (req, res, next) => {
  try {
    console.log('createBook')
    const  { name, author, price, image } = req.body;
    const newBook = await Book.create({ name, author, price, image })
    res.send(newBook)
  } catch(e) {
    console.log('Error', e)
  }
}