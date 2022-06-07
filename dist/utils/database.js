"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('book-shop', 'root', 'Illia20030123@', {
    dialect: 'mysql',
    host: 'localhost'
});
exports.default = sequelize;
//# sourceMappingURL=database.js.map