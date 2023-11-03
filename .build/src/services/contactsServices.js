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
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsServices = void 0;
const contactsModel_1 = require("../models/contactsModel");
function fetchAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const contactsResult = yield contactsModel_1.Contact.find();
        return contactsResult;
    });
}
function fetchOne(contactId) {
    return __awaiter(this, void 0, void 0, function* () {
        const contactResult = yield contactsModel_1.Contact.findById(contactId);
        if (!contactResult) {
            throw new Error("Error on finding a contact with this ID");
        }
        return contactResult;
    });
}
function deleteContact(contactId) {
    return __awaiter(this, void 0, void 0, function* () {
        const contactResult = yield contactsModel_1.Contact.findByIdAndDelete(contactId);
        if (!contactResult) {
            throw new Error('Contact not found');
        }
        return contactResult;
    });
}
function updateOneContact(contactId, update) {
    return __awaiter(this, void 0, void 0, function* () {
        const contactResult = yield contactsModel_1.Contact.findByIdAndUpdate(contactId, update);
        if (!contactResult) {
            throw new Error('Contact not found');
        }
        return contactResult;
    });
}
function createOneContact(contact) {
    return __awaiter(this, void 0, void 0, function* () {
        const contactResult = yield contactsModel_1.Contact.create(contact);
        if (!contactResult) {
            throw new Error('Error creating a new Contact');
        }
        return contactResult;
    });
}
exports.contactsServices = {
    fetchAll,
    fetchOne,
    createOneContact,
    updateOneContact,
    delete: deleteContact,
};
