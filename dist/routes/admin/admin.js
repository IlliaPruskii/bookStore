"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_joi_validation_1 = __importDefault(require("express-joi-validation"));
const admin_js_1 = require("../../controllers/admin.js");
const validation_js_1 = require("./validation.js");
const validator = express_joi_validation_1.default.createValidator({});
const router = express_1.default.Router();
router.get('/', admin_js_1.getBooks);
router.post('/createBook', validator.body(validation_js_1.createBookSchema), admin_js_1.createBook);
exports.default = router;
//# sourceMappingURL=admin.js.map