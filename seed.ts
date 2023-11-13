import { faker } from '@faker-js/faker';
import mongoose from "mongoose";
import "dotenv/config";
import { roomsInterface } from './src/interfaces/roomsInterface';
import { bookingsInterface } from './src/interfaces/bookingsInterface';
import { usersInterface } from './src/interfaces/usersInterface';
import { contactsInterface } from './src/interfaces/contactsInterface';
import { Room } from './src/models/roomsModel';
import { Booking } from './src/models/bookingsModel';
import { User } from './src/models/usersModel';
import { Contact } from './src/models/contactsModel';

const MAXNUM: number = 10;
const NUM_ROOMS: number = 10;
const NUM_BOOKINGS: number = 40;
const server: string = (process.argv.includes("atlas") ? process.env.ATLAS_SERVER : process.env.MONGO_URL) || '';
const MONGO_URL: string = process.env.MONGO_URL || "";
const databaseName: string = process.env.DB_NAME || "";
const roomType = ["Double Superior", "Single", "Deluxe", "Suite", "Imperial", "Double"];

async function seedDB(){
    try {
        await mongoose.connect(MONGO_URL, {
            dbName: databaseName,
        })
        console.log('connected');

        Booking.collection.drop()
        Room.collection.drop()
        Contact.collection.drop()
        User.collection.drop()
        
        const rooms: roomsInterface[] = []
        for (let i = 0; i < NUM_ROOMS; i++) {

            const roomData: roomsInterface = {
                photo: faker.image.urlPicsumPhotos(),
                roomNumber: faker.string.numeric(),
                id: faker.string.uuid(),
                bedType: roomType[faker.number.int({ min: 0, max: 5 })],
                facilities: [
                    "24-Hour Guard",
                    "Free Wifi",
                    "Air Conditioner",
                    "Television",
                    "Towels",
                    "Mini Bar",
                    "Jacuzzi",
                    "Nice Views"
                ],
                price: faker.number.int({ min: 30, max: 3000 }),
                offerprice: faker.number.int({ min: 30, max: 3000 }),
                status: "available",
            }
            
            const room: any = await Room.create(roomData);
            rooms.push(room);
        }
        console.log("Rooms seeded");

        const bookings: bookingsInterface[] = []
        const index = Math.floor(Math.random() * NUM_ROOMS);
        const roomId = rooms[index].id;

        for (let i = 0; i < NUM_BOOKINGS; i++) {

            const bookingData: bookingsInterface = {
                id: faker.string.uuid(),
                room_id: roomId,
                guest: faker.person.fullName(),
                phone_number: faker.phone.number(),
                order_date: faker.date.anytime().toString(),
                check_in: faker.date.anytime().toString(),
                check_out: faker.date.anytime().toString(),
                special_request: faker.lorem.sentence({ min: 2, max: 20 }),
                room_type: roomType[faker.number.int({ min: 0, max: 5 })],
                room_number: faker.string.numeric(),
                status: "available",
                photos: faker.image.urlPicsumPhotos(),
            }
            
            const booking: any = await Booking.create(bookingData);
            bookings.push(booking);
        }
        console.log("Bookings seeded");

        await User.create({
            full_name: 'Gaspar Sio',
            email: 'sio.gaspar@gmail.com',
            password: 'admin',
            photo: '',
            start_date: '2023-01-06',
            description: 'CEO MANAGER',
            phone_number: '+35 655 123 456',
            status: 'active',
        })

        const users: usersInterface[] = []
        for (let i = 0; i < MAXNUM; i++) {

            const userData: usersInterface = {
                employee_id: faker.string.uuid(),
                full_name: faker.person.fullName(),
                email: faker.internet.email(),
                photo: faker.image.urlPicsumPhotos(),
                start_date: faker.date.anytime().toString(),
                description: faker.lorem.sentence({ min: 2, max: 20 }),
                phone_number: faker.phone.number(),
                password: faker.internet.password(),
                status: "active",
            }
            
            const user: any = await User.create(userData);
            users.push(user);
        }
        console.log("Users seeded");
        

        const contacts: contactsInterface[] = []
        for (let i = 0; i < MAXNUM; i++) {

            const contactData: contactsInterface = {
                id: faker.string.uuid(),
                full_name: faker.person.fullName(),
                email: faker.internet.email(),
                phone_number: faker.phone.number(),
                subject_of_review: faker.lorem.sentence({ min: 1, max: 8 }),
                review_body: faker.lorem.sentence({ min: 2, max: 20 }),
                date: faker.date.anytime().toString(),
                dateTime: faker.date.anytime().toString(),
                isArchived: "archived",
            }
            
            const contact: any = await Contact.create(contactData);
            contacts.push(contact);
        }
        console.log("Contacts seeded");

    } catch (error) {
        throw new Error(`${error}`)
    } finally{
        setTimeout(() => {
            mongoose.disconnect();
          }, 2000);
    }
}
seedDB()
