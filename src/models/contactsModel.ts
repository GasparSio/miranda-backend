import mongoose from "mongoose";
import { contactsInterface } from "../interfaces/contactsInterface";

const contactsSchema = new mongoose.Schema<contactsInterface>({
    "id": String,
	"full_name": String,
	"email": String,
	"phone_number": String,
	"subject_of_review": String,
	"review_body": String,
	"date": String,
	"dateTime": String,
	"isArchived": String
})

export const Contact = mongoose.model('Contact', contactsSchema);

