"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const usersModel_1 = require("../models/usersModel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const secret = process.env.SECRET_KEY || '';
async function login(email, password) {
    try {
        const result = await usersModel_1.User.findOne({ email: email });
        console.log('usuario', result);
        if (!result) {
            throw new Error('Users not found');
        }
        const passwordMatch = await bcryptjs_1.default.compare(password, result.password || '');
        console.log('passwordMatch', passwordMatch);
        if (!passwordMatch) {
            throw new Error('email or password incorrect');
        }
        return signJWT({ email });
    }
    catch (error) {
        throw new Error('Authentication failed');
    }
}
// async function login(email: string, password: string) {
//     if (email === defaultUserEmail.email && password === defaultUserEmail.password) return signJWT({ email })
//     throw new Error('Wrong username or email!')
// }
function signJWT(payload) {
    // Sign the jwt token
    const token = jsonwebtoken_1.default.sign(payload, secret, { expiresIn: '10h' });
    return { payload, token };
}
function verifyJWT(token) {
    // Verify the jwt token
    const verifiedResult = jsonwebtoken_1.default.verify(token, secret);
    return verifiedResult;
}
exports.authService = {
    login,
    signJWT,
    verifyJWT,
};
