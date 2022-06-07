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
exports.createBook = exports.getBooks = void 0;
const book_js_1 = __importDefault(require("../models/book.js"));
const getBooks = (req, res) => {
    book_js_1.default.findAll()
        .then((books) => {
        res.send(books);
    });
};
exports.getBooks = getBooks;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('createBook');
        const { name, author, price, image } = req.body;
        const newBook = yield book_js_1.default.create({ name, author, price, image });
        res.send(newBook);
    }
    catch (e) {
        console.log('Error', e);
    }
});
exports.createBook = createBook;
//# sourceMappingURL=admin.js.map