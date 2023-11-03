"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contacts = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const contactsSchema = new mongoose_1.default.Schema({
    "id": String,
    "full_name": String,
    "email": String,
    "phone_number": String,
    "subject_of_review": String,
    "review_body": String,
    "date": String,
    "dateTime": String,
    "isArchived": String
});
exports.contacts = mongoose_1.default.model('contacts', contactsSchema);
