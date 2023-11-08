export interface bookingsInterface {
	id?: string
	guest: string
	phone_number: string
	order_date: string | Date
	check_in: string | Date
	check_out: string | Date
	special_request: string
	status: string
	photos?: string
	room_id: number
}