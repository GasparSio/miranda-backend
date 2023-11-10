import { faker } from '@faker-js/faker';
import "dotenv/config";
import { ModifyQuery, disconnect} from './src/util/connecionSQL';


const NUM_TOTAL: number = 10;
const NUM_ROOMS: number = 10;
const NUM_BOOKINGS: number = 60;

(async () => {
	try {
		await ModifyQuery(`DROP DATABASE miranda_hotel;`)
		await ModifyQuery(`CREATE DATABASE IF NOT EXISTS miranda_hotel;`)
		await ModifyQuery(`USE miranda_hotel;`)
		await ModifyQuery(`
		CREATE TABLE IF NOT EXISTS room (
			id INT NOT NULL AUTO_INCREMENT,
			room_number INT NOT NULL,
			room_type VARCHAR(45) NOT NULL,
			description LONGTEXT NOT NULL,
			price INT NOT NULL,
			offer_price BOOLEAN NOT NULL,
			discount INT NOT NULL,
			status VARCHAR(45) NOT NULL,
			PRIMARY KEY(id));
		`)
		for (let index = 0; index < NUM_ROOMS; index++) {
			const query = `INSERT INTO room (room_number, room_type, description, price, offer_price, discount, status)
				VALUES (?, ?, ?, ?, ?, ?, ?);`
			const params = [
				faker.helpers.rangeToNumber({ min: 100, max: 900 }),
				faker.helpers.arrayElement(['Single Bed', 'Double Bed', 'Double Superior', 'Suite', ]),
				faker.lorem.sentence(),
				faker.helpers.rangeToNumber({ min: 100, max: 1000 }),
				faker.helpers.arrayElement([true, false]),
				faker.helpers.arrayElement([0, 5, 10, 20]),
				faker.helpers.arrayElement(['Available', 'Booked']),
			]
			await ModifyQuery(query, params)
		}
		console.log("Rooms seeded");


		await ModifyQuery(`
		CREATE TABLE IF NOT EXISTS booking (
			id INT NOT NULL AUTO_INCREMENT,
			guest VARCHAR(255) NOT NULL,
			phone_number VARCHAR(45) NULL,
			order_date DATE NOT NULL,
			check_in DATE NULL,
			check_out DATE NULL,
			special_request LONGTEXT NULL,
			status VARCHAR(45) NOT NULL,
			room_id INT NOT NULL,
			PRIMARY KEY (id),
			FOREIGN KEY (room_id) REFERENCES room (id) ON DELETE CASCADE ON UPDATE CASCADE);
		`)
		for (let index = 0; index < NUM_BOOKINGS; index++) {
			const room_id = Math.floor((Math.random() * NUM_ROOMS) + 1);
			const query = `INSERT INTO booking (guest, phone_number, order_date, check_in, check_out, special_request, status, room_id)
				VALUES (?, ?, ?, ?, ?, ?, ?, ?);`
			const params = [
				faker.person.fullName(),
				faker.phone.number(),
				faker.date.anytime(),
				faker.date.anytime(),
				faker.date.anytime(),
				faker.lorem.sentence({ min: 2, max: 20 }),
				faker.helpers.arrayElement(['Check In', 'Check Out', 'In Progress']),
				room_id
			]
			await ModifyQuery(query, params)
		}
		console.log("Bookings seeded");


		await ModifyQuery(`
		CREATE TABLE IF NOT EXISTS user (
			id INT NOT NULL AUTO_INCREMENT,
			full_name VARCHAR(255) NOT NULL,
			email VARCHAR(255) NOT NULL,
			photo VARCHAR(255) NOT NULL,
			start_date DATE NOT NULL,
			description LONGTEXT NOT NULL,
			phone_number VARCHAR(45) NOT NULL,
			status VARCHAR(45) NOT NULL,
			PRIMARY KEY (id));
		`)
		for (let index = 0; index < NUM_TOTAL; index++) {
			const query = `INSERT INTO user (full_name, email, photo, start_date, description, phone_number, status)
				VALUES (?, ?, ?, ?, ?, ?, ?);`
			const params = [
				faker.person.fullName(),
				faker.internet.email(),
				faker.image.urlPicsumPhotos(),
				faker.date.anytime(),
				faker.lorem.sentence({ min: 2, max: 20 }),
				faker.phone.number(),
				faker.helpers.arrayElement(['Active', 'Inactive']),
			]
			await ModifyQuery(query, params)
		}
		console.log("users seeded");


		await ModifyQuery(`
		CREATE TABLE IF NOT EXISTS contact (
			id INT NOT NULL AUTO_INCREMENT,
			full_name VARCHAR(255) NOT NULL,
			email VARCHAR(255) NOT NULL,
			phone_number VARCHAR(45) NOT NULL,
			subject_of_review LONGTEXT NOT NULL,
			review_body LONGTEXT NOT NULL,
			dateTime DATETIME NOT NULL,
			status VARCHAR(45) NOT NULL,
			PRIMARY KEY (id));
		`)
		for (let index = 0; index < NUM_TOTAL; index++) {
			const query = `INSERT INTO contact (full_name, email, phone_number, subject_of_review, review_body, dateTime, status)
				VALUES (?, ?, ?, ?, ?, ?, ?);`
			const params = [
				faker.person.fullName(),
				faker.internet.email(),
				faker.phone.number(),
				faker.lorem.sentence({ min: 1, max: 8 }),
				faker.lorem.sentence({ min: 2, max: 20 }),
				faker.date.anytime(),
				faker.helpers.arrayElement(['Archived', 'Not Archived']),
			]
			await ModifyQuery(query, params)
		}
		console.log("contacts seeded");



		await ModifyQuery(`
		CREATE TABLE IF NOT EXISTS photo (
			id INT NOT NULL AUTO_INCREMENT,
			photos VARCHAR(255) NOT NULL,
			room_id INT NOT NULL,
			PRIMARY KEY (id),
			FOREIGN KEY (room_id) REFERENCES room (id) ON DELETE CASCADE ON UPDATE CASCADE);
		`)
		for (let index = 0; index < NUM_TOTAL; index++) {
			const room_id = Math.floor((Math.random() * NUM_ROOMS) + 1);
			const query = `INSERT INTO photo (photos, room_id)
				VALUES (?, ?);`
			const params = [
				faker.image.urlPicsumPhotos(),
				room_id
			]
			await ModifyQuery(query, params)
		}
		console.log("photos seeded");



		await ModifyQuery(`
		CREATE TABLE IF NOT EXISTS amenity (
			id INT NOT NULL AUTO_INCREMENT,
			amenities VARCHAR(255) NOT NULL,
			PRIMARY KEY (id));
		`)
		await ModifyQuery(
			`INSERT INTO amenity (amenities)
			VALUES 
			('Free Wifi'),
			('24-Hour Guard'),
			('Air Conditioner'),
			('Television'),
			('Towels'),
			('Mini Bar'),
			('Jacuzzi'),
			('Ping Pong Table'),
			('More space'),
			('Nice Views');`
		)
			
		console.log("amenities seeded");


		await ModifyQuery(`
		CREATE TABLE IF NOT EXISTS amenities_has_room (
			room_id INT NOT NULL,
			amenity_id INT NOT NULL,
			FOREIGN KEY (room_id) REFERENCES room (id) ON DELETE CASCADE ON UPDATE CASCADE,
			FOREIGN KEY (amenity_id) REFERENCES amenity (id), 
			PRIMARY KEY (room_id, amenity_id));
		`)
			
		for (let index = 1; index <= NUM_ROOMS; index++) {
			for (
				let indexAmenity = 1;
				indexAmenity <= Math.floor(Math.random() * (10 - 1) + 1);
				indexAmenity++
			) {
				const query = faker.helpers.arrayElement([
					`INSERT INTO amenities_has_room (room_id, amenity_id) VALUES (?, ?);`,
				])
				const params = [index, indexAmenity]
				await ModifyQuery(query, params)
			}
	}
		console.log("amenities_has_room seeded");

	} catch (error) {
		throw new Error(`${error}`)
	}

	disconnect()
})()