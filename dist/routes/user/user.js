"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_joi_validation_1 = __importDefault(require("express-joi-validation"));
const user_js_1 = require("../../controllers/user.js");
const validation_js_1 = require("./validation.js");
const validator = express_joi_validation_1.default.createValidator({});
const router = express_1.default.Router();
router.post('/create', validator.body(validation_js_1.createUserSchema), user_js_1.createUser);
router.post('/login', user_js_1.login);
router.post('/logout', user_js_1.logout);
router.post('/signup', user_js_1.signup);
exports.default = router;
//# sourceMappingURL=user.js.map