import contactsData from '../data/contactsData.json';
import { contactsInterface } from "../interfaces/contactsInterface";
import { SelectQuery } from '../util/connecionSQL';

export const contacts = contactsData

async function fetchAll() {
  const query = 'select * from contact;';
  const values: any[] = []; // Array vacío, lo necesito en este caso solo para recibir un 2do parametro
  const result = await SelectQuery(query, values);
  return result;
}

async function fetchOne(contactId: string) {
  const query = 'select * from contact WHERE id = ?;';
  const values = [contactId];
  const result = await SelectQuery(query, values);
  return result;
}

async function deleteContact(contactId: string) {
  const query = 'delete from contact where id = ?;';
  const values = [contactId];
  const result = await SelectQuery(query, values);
  return result;
}

async function createOneContact(contact: contactsInterface) {
  const query =
  `INSERT INTO contact 
  (full_name, email, phone_number, subject_of_review, review_body, dateTime, status) 
  values 
  (?, ?, ?, ?, ?, ?, ?);`
  
  const values = [
    contact.full_name,
    contact.email,
    contact.phone_number,
    contact.subject_of_review,
    contact.review_body,
    contact.dateTime,
    contact.status
  ];

  const result = await SelectQuery(query, values)
  return result;
}

async function updateOneContact(contactId: string, update: Partial<contactsInterface>) {
	const query =
    `UPDATE contact 
    SET full_name=?, email=?, phone_number=?, subject_of_review=?, review_body=?, dateTime=?, status=?
    WHERE id = ?;`;

  const values = [
    update.full_name,
    update.email,
    update.phone_number,
    update.subject_of_review,
    update.review_body,
    update.dateTime,
    update.status,
    contactId
  ];

  const result = await SelectQuery(query, values);
  return result;
}

export const contactsServices = {
    fetchAll,
    fetchOne,
    createOneContact,
    updateOneContact,
    delete: deleteContact,
};