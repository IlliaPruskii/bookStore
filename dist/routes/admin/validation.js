"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createBookSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    author: joi_1.default.string(),
    price: joi_1.default.number().required(),
    image: joi_1.default.string()
});
//# sourceMappingURL=validation.js.map