"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsServices = void 0;
const contactsModel_1 = require("../models/contactsModel");
async function fetchAll() {
    const contactsResult = await contactsModel_1.Contact.find();
    return contactsResult;
}
async function fetchOne(contactId) {
    const contactResult = await contactsModel_1.Contact.findById(contactId);
    if (!contactResult) {
        throw new Error("Error on finding a contact with this ID");
    }
    return contactResult;
}
async function deleteContact(contactId) {
    const contactResult = await contactsModel_1.Contact.findByIdAndDelete(contactId);
    if (!contactResult) {
        throw new Error('Contact not found');
    }
    return contactResult;
}
async function updateOneContact(contactId, update) {
    const contactResult = await contactsModel_1.Contact.findByIdAndUpdate(contactId, update);
    if (!contactResult) {
        throw new Error('Contact not found');
    }
    return contactResult;
}
async function createOneContact(contact) {
    const contactResult = await contactsModel_1.Contact.create(contact);
    if (!contactResult) {
        throw new Error('Error creating a new Contact');
    }
    return contactResult;
}
exports.contactsServices = {
    fetchAll,
    fetchOne,
    createOneContact,
    updateOneContact,
    delete: deleteContact,
};
