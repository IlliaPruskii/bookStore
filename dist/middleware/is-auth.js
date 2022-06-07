"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.send('You dont have permission to this route');
    }
    next();
};
//# sourceMappingURL=is-auth.js.map