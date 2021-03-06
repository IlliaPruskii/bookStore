"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_js_1 = __importDefault(require("../utils/database.js"));
const Book = database_js_1.default.define('book', {
    id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    author: sequelize_1.default.STRING,
    price: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    image: sequelize_1.default.STRING,
});
exports.default = Book;
//# sourceMappingURL=book.js.map