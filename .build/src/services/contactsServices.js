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
exports.contactsServices = exports.contacts = void 0;
const contactsData_json_1 = __importDefault(require("../data/contactsData.json"));
exports.contacts = contactsData_json_1.default;
function fetchAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const contactsResult = yield exports.contacts;
        if (contactsResult.length === 0) {
            throw new Error("Error on finding contacts");
        }
        return contactsResult;
    });
}
function fetchOne(contactId) {
    return __awaiter(this, void 0, void 0, function* () {
        const contactResult = yield exports.contacts.filter((contact) => contact.id === contactId);
        if (contactResult.length === 0) {
            throw new Error("Error on finding a contact with this ID");
        }
        return contactResult;
    });
}
function deleteContact(contactId) {
    return __awaiter(this, void 0, void 0, function* () {
        // const id = userId.toString()
        const currentContactIndex = exports.contacts.findIndex((contact) => contact.id === contactId);
        if (currentContactIndex === -1) {
            throw new Error('Contact not found');
        }
        else {
            const result = yield exports.contacts.splice(currentContactIndex, 1);
            return result;
        }
    });
}
function updateOneContact(contactId, update) {
    return __awaiter(this, void 0, void 0, function* () {
        // const id = userId.toString()
        const currentContactIndex = exports.contacts.findIndex((contact) => contact.id === contactId);
        if (currentContactIndex === -1)
            throw new Error('User not found');
        const result = (exports.contacts[currentContactIndex] = Object.assign(Object.assign({}, exports.contacts[currentContactIndex]), update));
        return result;
    });
}
function createOneContact(contact) {
    return __awaiter(this, void 0, void 0, function* () {
        const initialUsersLength = exports.contacts.length;
        yield exports.contacts.push(contact);
        if (exports.contacts.length === initialUsersLength) {
            throw new Error('Error creating a new Contact');
        }
        return contact;
    });
}
exports.contactsServices = {
    fetchAll,
    fetchOne,
    createOneContact,
    updateOneContact,
    delete: deleteContact,
};
