import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('book-shop', 'root', 'Illia20030123@', {
  dialect: 'mysql',
  host: 'localhost'
})

export default sequelize