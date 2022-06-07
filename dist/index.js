"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
const connect_session_sequelize_1 = __importDefault(require("connect-session-sequelize"));
const database_js_1 = __importDefault(require("./utils/database.js"));
const admin_js_1 = __importDefault(require("./routes/admin/admin.js"));
const user_js_1 = __importDefault(require("./routes/user/user.js"));
const cart_js_1 = __importDefault(require("./routes/cart/cart.js"));
const cart_js_2 = __importDefault(require("./models/cart.js"));
const user_js_2 = __importDefault(require("./models/user.js"));
const cart_item_js_1 = __importDefault(require("./models/cart-item.js"));
const book_js_1 = __importDefault(require("./models/book.js"));
const is_auth_js_1 = __importDefault(require("./middleware/is-auth.js"));
const PORT = 8000;
const SequelizeStore = (0, connect_session_sequelize_1.default)(express_session_1.default.Store);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: database_js_1.default,
    }),
    proxy: true,
}));
app.use('/admin', is_auth_js_1.default, admin_js_1.default);
app.use('/user', user_js_1.default);
app.use('/cart', is_auth_js_1.default, cart_js_1.default);
cart_js_2.default.belongsTo(user_js_2.default);
user_js_2.default.hasOne(cart_js_2.default);
book_js_1.default.belongsToMany(cart_js_2.default, { through: cart_item_js_1.default });
cart_js_2.default.belongsToMany(book_js_1.default, { through: cart_item_js_1.default });
database_js_1.default
    // .sync({ force: true })
    .sync()
    .then(() => {
    app.listen(PORT, () => console.log(`notes-app listening on port ${PORT}!`));
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map