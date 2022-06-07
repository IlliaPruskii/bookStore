"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_js_1 = require("../../controllers/cart.js");
const router = express_1.default.Router();
router.get('/', cart_js_1.getCartItems);
router.post('/add', cart_js_1.addBookToCart);
exports.default = router;
//# sourceMappingURL=cart.js.map