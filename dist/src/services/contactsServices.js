"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsServices = exports.contacts = void 0;
const contactsData_json_1 = __importDefault(require("../data/contactsData.json"));
exports.contacts = contactsData_json_1.default;
async function fetchAll() {
    const contactsResult = await exports.contacts;
    if (contactsResult.length === 0) {
        throw new Error("Error on finding contacts");
    }
    return contactsResult;
}
async function fetchOne(contactId) {
    const contactResult = await exports.contacts.filter((contact) => contact.id === contactId);
    if (contactResult.length === 0) {
        throw new Error("Error on finding a contact with this ID");
    }
    return contactResult;
}
async function deleteContact(contactId) {
    // const id = userId.toString()
    const currentContactIndex = exports.contacts.findIndex((contact) => contact.id === contactId);
    if (currentContactIndex === -1) {
        throw new Error('Contact not found');
    }
    else {
        const result = await exports.contacts.splice(currentContactIndex, 1);
        return result;
    }
}
async function updateOneContact(contactId, update) {
    // const id = userId.toString()
    const currentContactIndex = exports.contacts.findIndex((contact) => contact.id === contactId);
    if (currentContactIndex === -1)
        throw new Error('User not found');
    const result = (exports.contacts[currentContactIndex] = {
        ...exports.contacts[currentContactIndex],
        ...update,
    });
    return result;
}
async function createOneContact(contact) {
    const initialUsersLength = exports.contacts.length;
    await exports.contacts.push(contact);
    if (exports.contacts.length === initialUsersLength) {
        throw new Error('Error creating a new Contact');
    }
    return contact;
}
exports.contactsServices = {
    fetchAll,
    fetchOne,
    createOneContact,
    updateOneContact,
    delete: deleteContact,
};
