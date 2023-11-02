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
exports.authService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const defaultUserEmail = {
    username: "gaspar",
    email: "sio@gmail.com",
};
const secret = process.env.SECRET_KEY || '';
function login(username, email) {
    return __awaiter(this, void 0, void 0, function* () {
        if (username === defaultUserEmail.username && email === defaultUserEmail.email)
            return signJWT({ username });
        throw new Error('Wrong username or email!');
    });
}
function signJWT(payload) {
    // Sign the jwt token
    const token = jsonwebtoken_1.default.sign(payload, secret);
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
