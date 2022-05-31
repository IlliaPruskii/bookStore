const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./utils/database')
const adminRouter = require('./routes/admin/admin')
const userRouter = require('./routes/user/user')
const cartRouter = require('./routes/cart/cart')
const Cart = require('./models/cart')
const User = require('./models/user')
const CartItem = require('./models/cart-item')
const Book = require('./models/book')

const PORT = 3000

const app = express()

app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/admin', adminRouter)
app.use('/user', userRouter)
app.use('/cart', cartRouter)

Cart.belongsTo(User)
User.hasOne(Cart)
Book.belongsToMany(Cart, { through: CartItem })
Cart.belongsToMany(Book, { through: CartItem })

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`notes-app listening on port ${PORT}!`));
  })
  .catch(err => {
    console.log(err);
  });
