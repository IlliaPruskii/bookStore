import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import sequelizeSession from 'connect-session-sequelize'

import sequelize from './utils/database.js'
import adminRouter from './routes/admin/admin.js'
import userRouter from './routes/user/user.js'
import cartRouter from './routes/cart/cart.js'
import Cart from './models/cart.js'
import User from './models/user.js'
import CartItem from './models/cart-item.js'
import Book from './models/book.js'
import isAuth from './middleware/is-auth.js'

const PORT = 8000

const SequelizeStore = sequelizeSession(session.Store);

const app = express()

app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  session({
    secret: 'my secret',
    resave: false, 
    saveUninitialized: false,
    store: new SequelizeStore({
      db: sequelize,
    }),
    proxy: true,
  })
)

app.use('/admin', isAuth, adminRouter)
app.use('/user', userRouter)
app.use('/cart', isAuth, cartRouter)

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
  .catch((err: any) => {
    console.log(err);
  });
