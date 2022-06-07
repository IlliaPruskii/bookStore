"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBookToCart = exports.getCartItems = void 0;
const book_js_1 = __importDefault(require("../models/book.js"));
const user_js_1 = __importDefault(require("../models/user.js"));
const getCartItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId = 1 } = req.query;
    const user = yield user_js_1.default.findByPk(userId);
    const cart = yield user.getCart();
    const books = yield cart.getBooks();
    res.send(books);
});
exports.getCartItems = getCartItems;
const addBookToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId = 1, bookId } = req.body;
    let newQuantity = 1;
    let book;
    const user = yield user_js_1.default.findByPk(userId);
    const cart = yield user.getCart();
    const books = yield cart.getBooks({ where: { id: bookId } });
    if (books.length > 0) {
        book = books[0];
        newQuantity = books[0].cartItem.quantity + 1;
    }
    else {
        book = yield book_js_1.default.findByPk(bookId);
    }
    const result = yield cart.addBook(book, {
        through: { quantity: newQuantity }
    });
    res.send(result);
});
exports.addBookToCart = addBookToCart;
//# sourceMappingURL=cart.js.map