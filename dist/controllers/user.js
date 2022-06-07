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
exports.signup = exports.logout = exports.login = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_js_1 = __importDefault(require("../models/user.js"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const newUser = yield user_js_1.default.create({ name, email });
    yield newUser.createCart();
    res.send(newUser);
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_js_1.default.findOne({ where: { email } });
    if (!user) {
        return res.send('User with this email was not found!');
    }
    const isPasswordCorrect = yield bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordCorrect) {
        return res.send('Password is wrong!');
    }
    req.session.isLoggedIn = true;
    req.session.user = user;
    req.session.save(() => res.send('You was successfully login! '));
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.session.destroy();
    res.send('You was logout!');
});
exports.logout = logout;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, passwordConfirmation } = req.body;
    const userWithThisEmail = yield user_js_1.default.findOne({ where: { email } });
    if (userWithThisEmail) {
        res.send('User with this email already exist!');
    }
    const cryptPassword = yield bcryptjs_1.default.hash(password, 12);
    const newUser = yield user_js_1.default.create({ email, password: cryptPassword });
    res.send(newUser);
});
exports.signup = signup;
//# sourceMappingURL=user.js.map