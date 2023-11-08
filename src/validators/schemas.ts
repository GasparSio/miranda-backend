const Joi = require('joi');

export const loginSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
})
const currentDate = new Date().toISOString().split('T')[0];
export const bookingSchema = Joi.object({
    guest: Joi.string().alphanum().required(),
	phone_number: Joi.string().required(),
	order_date: Joi.date().min(currentDate).required(),
	check_in: Joi.date().required().greater(Joi.ref('order_date')),
    check_out: Joi.date().required().greater(Joi.ref('check_in')),
	special_request: Joi.string().min(1).max(150).required(),
	status: Joi.string().valid('Check In', 'Check Out', 'In Progress').required(),
	room_id: Joi.number().required(),
})

export const roomSchema = Joi.object({
	room_number: Joi.number().required(),
	room_type: Joi.string().valid('Single Bed', 'Double Bed', 'Suite', 'Double Superior').required(),
	description: Joi.string().required(),
	price: Joi.number().required(),
	offer_price: Joi.number().required(),
	discount: Joi.number().required(),
	status: Joi.string().valid('Booked', 'Available').required()
})

export const contactSchema = Joi.object({
	full_name: Joi.string().required(),
	email: Joi.string().email({ minDomainSegments: 2, tlds: {allow: ['com', 'net']}}).required(),
	phone_number: Joi.string().required(),
	subject_of_review: Joi.string().min(1).max(150).required(),
	review_body: Joi.string().min(1).max(150).required(),
	dateTime: Joi.string().required(),
	status: Joi.string().valid('Archived', 'Not Archived').required()
})

export const userSchema = Joi.object({
    full_name: Joi.string().required(),
	email: Joi.string().required(),
	photo: Joi.string().required(),
	start_date: Joi.string().required(),
	description: Joi.string().required(),
	phone_number: Joi.string().required(),
	status: Joi.string().required().valid('Archived', 'Not Archived'),
})