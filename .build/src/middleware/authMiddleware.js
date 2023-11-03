"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const loginServices_1 = require("../services/loginServices");
function authMiddleware(req, res, next) {
    try {
        const token = req.get('token') || '';
        loginServices_1.authService.verifyJWT(token);
        return next();
    }
    catch (error) {
        return res.status(401).json('Error: Incorrect Token');
    }
}
exports.authMiddleware = authMiddleware;
