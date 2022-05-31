const Book = require('../models/book')

exports.getBooks = (req, res) => {
  Book.findAll()
    .then((books) => {
      res.send(books)
    })
}

exports.createBook = async (req, res, next) => {
  try {
    console.log('createBook')
    const  { name, author, price, image } = req.body;
    const newBook = await Book.create({ name, author, price, image })
    res.send(newBook)
  } catch(e) {
    console.log('Error', e)
  }
}