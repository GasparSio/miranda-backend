"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const usersSchema = new mongoose_1.default.Schema({
    "full_name": { type: String, required: true },
    "email": { type: String, required: true },
    "photo": { type: String },
    "start_date": { type: String, required: true },
    "description": { type: String, required: true },
    "phone_number": { type: String, required: true },
    "password": { type: String, required: true },
    "status": { type: String },
});
exports.User = mongoose_1.default.model('User', usersSchema);
