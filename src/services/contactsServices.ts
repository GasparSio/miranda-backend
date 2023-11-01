import contactsData from '../data/contactsData.json';
import { contactsInterface } from "../interfaces/contactsInterface";

export const contacts = contactsData

async function fetchAll() {
  const contactsResult = await contacts
  if (contactsResult.length === 0){
    throw new Error("Error on finding contacts");
  } 
  return contactsResult;
}

async function fetchOne(contactId: string) {
  const contactResult = await contacts.filter((contact) => contact.id === contactId);
  if (contactResult.length === 0) {
    throw new Error("Error on finding a contact with this ID");
  } 
  return contactResult;
}

async function deleteContact(contactId: string) {
  // const id = userId.toString()
const currentContactIndex = contacts.findIndex((contact) => contact.id === contactId)
  if (currentContactIndex === -1) {
    throw new Error('Contact not found')
  }else {
    const result = await contacts.splice(currentContactIndex, 1)
    return result
}
}

async function updateOneContact(contactId: string, update: Partial<contactsInterface>) {
    // const id = userId.toString()
	const currentContactIndex = contacts.findIndex((contact) => contact.id === contactId)
	if (currentContactIndex === -1) throw new Error('User not found')
	const result = (contacts[currentContactIndex] = {
		...contacts[currentContactIndex],
		...update,
	})
	return result
}

async function createOneContact(contact: contactsInterface) {
  const initialUsersLength = contacts.length;
  await contacts.push(contact);
  if (contacts.length === initialUsersLength) {
    throw new Error('Error creating a new Contact');
  }
  return contact;
}


export const contactsServices = {
    fetchAll,
    fetchOne,
    createOneContact,
    updateOneContact,
    delete: deleteContact,
};