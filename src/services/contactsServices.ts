import contactsData from '../data/contactsData.json';
import { contactsInterface } from "../interfaces/contactsInterface";
import { SelectQuery } from '../util/connecionSQL';

export const contacts = contactsData

async function fetchAll() {
  const result = await SelectQuery(
    'select * from contact;')
  return result;
}

async function fetchOne(contactId: string) {
  const result = await SelectQuery(
    `select * from contact WHERE id = ${contactId};`)
  return result;
}

async function deleteContact(contactId: string) {
  const result = await SelectQuery(
    `delete from contact where id = ${contactId};`)
  return result;
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