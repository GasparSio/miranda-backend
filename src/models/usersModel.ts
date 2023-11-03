import mongoose from "mongoose";
import { usersInterface } from "../interfaces/usersInterface";

const usersSchema = new mongoose.Schema<usersInterface>({
    "employee_id": String,
	"full_name": String,
	"email": String,
	"photo": String,
	"start_date": String,
	"description": String,
	"phone_number": String,
	"status": String,
})

export const users = mongoose.model('users', usersSchema);