import { contactsInterface } from "../interfaces/contactsInterface";
import { contacts } from "../models/contactsModel";

async function fetchAll() {
  const contactsResult = await contacts.find()
  if (contactsResult.length === 0){
    throw new Error("Error on finding contacts");
  } 
  return contactsResult;
}

async function fetchOne(contactId: string) {
  const contactResult = await contacts.findById(contactId);
  if (!contactResult) {
    throw new Error("Error on finding a contact with this ID");
  } 
  return contactResult;
}

async function deleteContact(contactId: string) {
  const contactResult = await contacts.findByIdAndDelete(contactId)
  if (!contactResult) {
    throw new Error('Contact not found')
  }
    return contactResult
}

async function updateOneContact(contactId: string, update: Partial<contactsInterface>) {
	const contactResult = await contacts.findByIdAndUpdate(contactId, update)
	if (!contactResult){
    throw new Error('Contact not found')
  } 
	return contactResult
}

async function createOneContact(contact: contactsInterface) {
  const contactResult = await contacts.create(contact);
  if (!contactResult) {
    throw new Error('Error creating a new Contact');
  }
  return contactResult;
}

export const contactsServices = {
    fetchAll,
    fetchOne,
    createOneContact,
    updateOneContact,
    delete: deleteContact,
};