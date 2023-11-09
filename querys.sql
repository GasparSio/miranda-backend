create database miranda_hotel;
show databases;
use miranda_hotel;

CREATE TABLE IF NOT EXISTS `room` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `room_number` INT NOT NULL,
    `room_type` VARCHAR(45) NOT NULL,
    `description` VARCHAR(255) NULL,
    `price` VARCHAR (45) NOT NULL,
    `offer_price` VARCHAR(45) NOT NULL,
    `discount` INT NULL,
    `status` VARCHAR(45) NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `booking` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `guest` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(45) NULL,
    `order_date` DATE NOT NULL,
    `check_in` DATETIME NULL,
    `check_out` DATETIME NULL,
    `special_request` VARCHAR(255) NULL,
    `status` VARCHAR(45) NOT NULL,
    `room_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS `contact` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `subject_of_review` VARCHAR(255) NOT NULL,
  `review_body` VARCHAR(255) NOT NULL,
  `dateTime` DATETIME NOT NULL,
  `isArchived` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `photo` VARCHAR(255) NOT NULL,
  `start_date` DATE NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `photo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `photos` VARCHAR(255) NOT NULL,
  `room_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `amenity` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amenities` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `amenity_has_room` (
  `amenity_id` INT NOT NULL,
  `room_id` INT NOT NULL,
  PRIMARY KEY (`amenity_id`, `room_id`),
  FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`amenity_id`) REFERENCES `amenity` (`id`)
);

insert into amenity (amenities) values ('Free Wifi'),('24-Hour Guard'),('Air Conditioner'),('Television'),('Towels'),('Mini Bar'),('Jacuzzi'),('Nice Views');
insert into contact (full_name, email, phone_number, subject_of_review, review_body, dateTime, isArchived) values 
	('Alice Johnson', 'alice.johnson@example.com', '555-123-4567', 'Wonderful Stay', 'I had a wonderful stay at this hotel. The staff was friendly and accommodating, and the room was clean and comfortable. The hotel\'s amenities, including the pool and fitness center, were top-notch. I would definitely recommend it.', '2023-09-25 09:15:00', 'false'),
    ('Bob Smith', 'bob.smith@example.com', '555-987-6543', 'Excellent Service', 'I was thoroughly impressed with the excellent service provided by the hotel staff. They were attentive and made my stay truly enjoyable. The restaurant\'s food was delicious, and the location was perfect for exploring the city.', '2023-09-26 10:30:00', 'false'),
	('Caroline Davis', 'caroline.davis@example.com', '555-555-1234', 'Relaxing Getaway', 'My stay at this hotel was a relaxing getaway. The spa treatments were exceptional, and I felt rejuvenated after my visit. The room had a beautiful view, and the staff made me feel right at home.', '2023-09-27 14:45:00', 'false'),
	('Daniel Brown', 'daniel.brown@example.com', '555-888-9999', 'Outstanding Experience', 'I can\'t say enough about the outstanding experience I had at this hotel. From the moment I arrived, I was treated like royalty. The room was luxurious, and the staff made sure every detail was perfect.', '2023-09-28 08:00:00', 'false'),
	('Eleanor Wilson', 'eleanor.wilson@example.com', '555-333-4444', 'Great Hospitality', 'The hotel\'s hospitality was exceptional. I felt welcomed throughout my stay, and the staff\'s attention to detail made it truly special. The location was convenient, and I enjoyed exploring the nearby attractions.', '2023-09-29 11:15:00', 'false'),
	('Fiona Lee', 'fiona.lee@example.com', '555-777-8888', 'Memorable Trip', 'My trip to this hotel was truly memorable. The room was spacious and well-appointed, and the hotel\'s restaurant served delicious meals. The concierge helped me plan some great outings in the city.', '2023-09-30 15:30:00', 'false'),
	('George Martinez', 'george.martinez@example.com', '555-666-7777', 'Fantastic Stay', 'I had a fantastic stay at this hotel. The room was clean and comfortable, and the staff provided excellent service. The hotel\'s location was ideal for exploring the city, and I had a great time.', '2023-10-01 06:45:00', 'false'),
	('Hannah Garcia', 'hannah.garcia@example.com', '555-111-2222', 'Luxurious Retreat', 'This hotel provided a luxurious retreat. The spa was a highlight, and the treatments were heavenly. The attention to detail in the room design was impressive, and I felt pampered throughout my stay.', '2023-10-02 13:00:00', 'false'),
	('Isaac Lopez', 'isaac.lopez@example.com', '555-999-1111', 'Great Dining Experience', 'I had a great dining experience at this hotel\'s restaurant. The food was delicious, and the staff was knowledgeable about wine pairings. The atmosphere was perfect for a romantic dinner.', '2023-10-03 19:30:00', 'false'),
	('Julia Adams', 'julia.adams@example.com', '555-456-7890', 'Exceptional Staff', 'The staff at this hotel were exceptional. They made me feel like a VIP from the moment I arrived. Whether it was the concierge arranging a city tour or the housekeeping team ensuring my room was spotless, their service was top-notch.', '2023-10-04 16:00:00', 'false');

insert into room (room_number, room_type, description, price, offer_price, discount, status)
VALUES
('292', 'ex', 'eiusmod aliquip', '307,29 €', '$229.44', '10','booked'),
('224', 'non laboris', 'dolore velit ut et laboris ea do nisi', '90,93 €', '247.22', '10','available'),
('295', 'excepteur', 'in dolore incididunt elit', '331,00 €', '$158.15', '10','booked'),
('237', 'officia', 'Lorem', '228,80 €', '$308.40', '10','available'),
('370', 'sint laborum', 'est in proident enim', '233,57 €', '$152.41', '10','booked'),
('265','exercitation culpa', 'nostrud', '128,66 €', '$75.28', '10','available'),
('360', 'sunt', 'dolor minim anim commodo laboris id', '227.09 €', '$295.51', '10','booked'),
('368', 'officia ad', 'laborum nulla fugiat cupidatat aute labore cillum', '178.38 €', '$94.04', '10','booked'),
('108', 'ipsum', 'pariatur in sit eu', '75.22 €', '$236.46', '10','available');

insert into user (full_name, email, photo, start_date, description, phone_number, status) values
	('John Doe', 'john.doe@example.com', 'https://robohash.org/JohnDoe.png?set=any', '2020-05-15', 'Front Desk Manager', '+1 (123) 456-7890', 'active'),
	('Jane Smith', 'jane.smith@example.com', 'https://robohash.org/JaneSmith.png?set=any', '2019-08-20', 'Housekeeping Supervisor', '+1 (234) 567-8901', 'inactive'),
	('Michael Johnson', 'michael.johnson@example.com', 'https://robohash.org/MichaelJohnson.png?set=any', '2021-02-10', 'Chef', '+1 (345) 678-9012', 'active'),
	('Emily Davis', 'emily.davis@example.com', 'https://robohash.org/EmilyDavis.png?set=any', '2018-11-05', 'Bartender', '+1 (456) 789-0123', 'active'),
	('David Wilson', 'david.wilson@example.com', 'https://robohash.org/DavidWilson.png?set=any', '2019-04-25', 'Room Service Attendant', '+1 (567) 890-1234', 'active'),
	('Sarah Brown', 'sarah.brown@example.com', 'https://robohash.org/SarahBrown.png?set=any', '2022-01-15', 'Concierge', '+1 (678) 901-2345', 'inactive'),
	('Daniel Lee', 'daniel.lee@example.com', 'https://robohash.org/DanielLee.png?set=any', '2019-10-30', 'Maintenance Technician', '+1 (789) 012-3456', 'inactive'),
	('Olivia Hall', 'olivia.hall@example.com', 'https://robohash.org/OliviaHall.png?set=any', '2021-06-12', 'Housekeeping Staff', '+1 (890) 123-4567', 'inactive'),
	('William Taylor', 'william.taylor@example.com', 'https://robohash.org/WilliamTaylor.png?set=any', '2020-09-08', 'Front Desk Clerk', '+1 (901) 234-5678', 'active'),
	('Ava Clark', 'ava.clark@example.com', 'https://robohash.org/AvaClark.png?set=any', '2021-03-22', 'Restaurant Manager', '+1 (012) 345-6789', 'active');

insert into room (room_number, room_type, description, price, offer_price, discount, status)
VALUES
  ('292', 'ex', 'eiusmod aliquip', '307,29 €', '$229.44', '10','booked'),
  ('224', 'non laboris', 'dolore velit ut et laboris ea do nisi', '90,93 €', '247.22', '10','available'),
  ('295', 'excepteur', 'in dolore incididunt elit', '331,00 €', '$158.15', '10','booked'),
  ('237', 'officia', 'Lorem', '228,80 €', '$308.40', '10','available'),
  ('370', 'sint laborum', 'est in proident enim', '233,57 €', '$152.41', '10','booked'),
  ('265','exercitation culpa', 'nostrud', '128,66 €', '$75.28', '10','available'),
  ('360', 'sunt', 'dolor minim anim commodo laboris id', '227.09 €', '$295.51', '10','booked'),
  ('368', 'officia ad', 'laborum nulla fugiat cupidatat aute labore cillum', '178.38 €', '$94.04', '10','booked'),
  ('108', 'ipsum', 'pariatur in sit eu', '75.22 €', '$236.46', '10','available');

INSERT into booking (guest, phone_number, order_date, check_in, check_out, special_request, status, room_id) values
  ('Bob Johnson', '+1 234-567-8901', '2023-10-02', '2023-10-11', '2023-10-16', 'I\'d like an extra blanket.', 'Check In', 1),
  ('Charlie Brown', '+1 345-678-9012', '2023-10-03', '2023-10-12', '2023-10-17', 'Please provide a baby crib.', 'In Progress', 2),
  ('Alice Smith', '+1 123-456-7890', '2023-10-03', '2023-10-12', '2023-10-18', '', 'Check Out', 3),
  ('David Lee', '+1 456-789-0123', '2023-10-04', '2023-10-13', '2023-10-18', 'I\'d like a bottle of champagne in the room.', 'Check In', 4),
  ('Emily Wilson', '+1 567-890-1234', '2023-10-05', '2023-10-14', '2023-10-19', 'I\'d like a bottle of champagne in the room.', 'In Progress', 5),
  ('Frank Davis', '+1 678-901-2345', '2023-10-06', '2023-10-15', '2023-10-20', 'Please provide extra blankets.', 'Check Out', 6),
  ('Grace Taylor', '+1 789-012-3456', '2023-10-07', '2023-10-16', '2023-10-21', 'Please provide a baby crib.', 'Check In', 7),
  ('Hannah Parker', '+1 890-123-4567', '2023-10-08', '2023-10-17', '2023-10-22', 'Please provide extra blankets.', 'Check Out', 8),
  ('Isabella Turner', '+1 901-234-5678', '2023-10-09', '2023-10-18', '2023-10-23', 'I\'d like a wake-up call at 7 AM and a daily newspaper.', 'Check In', 1),
  ('Jack Harris', '+1 012-345-6789', '2023-10-10', '2023-10-19', '2023-10-24', 'Please provide extra blankets.', 'Check In', 2);

INSERT into photo (photos, room_id) values
	('https://example.com/room_photos/single_bed_1_medium.jpg', 1),
	('https://example.com/room_photos/suite_1_medium.jpg', 2),
	('https://i.pinimg.com/originals/56/2c', 3),
	('https://example.com/room_photos/double_superior_1_medium.jpg', 4),
	('https://example.com/room_photos/single_bed_1_medium.jpg', 5),
	('https://example.com/room_photos/suite_1_medium.jpg', 6),
	('https://i.pinimg.com/originals/56/2c', 7);

INSERT INTO amenity_has_room (room_id, amenity_id)
VALUES (1, 1), (1, 2), (1, 3), (1, 4), (2, 1), (2, 2), (2, 3), (2, 5), (2, 6), (3, 1), (3, 2), (3, 3), (3, 4), (4, 1), (4, 2), (4, 3), (4, 4), (5, 1), (5, 2), (5, 3), (5, 6), (6, 1), (6, 6), (6, 7), (7, 1), (7, 5), (7, 7), (8, 1), (8, 7), (8, 6), (9, 1), (9, 3), (9, 5);


--ROOM
--fetchAll
select 
	r.*, GROUP_CONCAT(DISTINCT p.photos) AS all_photos, COALESCE(GROUP_CONCAT(a.amenities) AS all_amenities, 'Free WIFI')
	FROM room r 
	LEFT JOIN photo p ON r.id = p.room_id 
	LEFT JOIN amenity_has_room ah ON r.id = ah.room_id
	LEFT JOIN amenity a ON ah.amenity_id = a.id
  GROUP BY r.id;
--fetchOne 
select * from room where id = 1;
--createOne
insert into room (room_number, room_type, description, price, offer_price, discount, status)
VALUES ('292', 'ex', 'eiusmod aliquip', '307,29 €', '$229.44', '10','booked');
--deleteOne
delete from room where id = 10;
--updateOne
update room
	SET room_number = 666, room_type = 'Single bed', description = 'abcd', price = '666 €', offer_price = '555 €', discount = 15, status = 'booked'
  WHERE id = 5;


--BOOKING
--fetchAll
select b.*, r.room_number, r.room_type, GROUP_CONCAT(p.photos) AS all_photos
FROM booking b
LEFT JOIN room r ON b.room_id = r.id
LEFT JOIN photo p ON r.id = p.room_id
GROUP BY b.id;
--fetchOne
select b.*, r.room_number, r.room_type, GROUP_CONCAT(p.photos) AS all_photos
FROM booking b
LEFT JOIN room r ON b.room_id = r.id
LEFT JOIN photo p ON r.id = p.room_id
GROUP BY b.id;
WHERE id = 1;
--createOne
INSERT into booking (guest, phone_number, order_date, check_in, check_out, special_request, status, room_id) 
values ('Bob Johnson', '+1 234-567-8901', '2023-10-02', '2023-10-11', '2023-10-16', 'I"d like an extra blanket.', 'Check In', 1);
--deleteOne
delete from booking where id = 10;
--updateOne
update booking
	SET guest = 'Bob Johnson', phone_number = '+1 234-567-8901', order_date = '2023-10-02', check_in = '2023-10-11', check_out = '2023-10-16', special_request = 'I"d like an extra blanket.', status = 'Check In', room_id = 3
  WHERE id = 5;


--CONTACTS
--fetchAll
select * from contact;
--fetchONe
select * from contact where id = 1;
--createOne
insert into contact (full_name, email, phone_number, subject_of_review, review_body, dateTime, isArchived) values 
	('Alice Johnson', 'alice.johnson@example.com', '555-123-4567', 'Wonderful Stay', 'I had a wonderful stay at this hotel. The staff was friendly and accommodating.', '2023-09-25 09:15:00', 'false');
--deleteOne
delete from contact where id = 10;
--updateOne
update contact
	SET full_name = 'Alice Johnson', email = 'alice.johnson@example.com', phone_number = '555-123-4567', subject_of_review = 'Wonderful Stay', review_body = 'I had a wonderful stay at this hotel.', dateTime = '2023-09-25 09:15:00', isArchived = 'false'
  WHERE id = 5;


--USERS
--fetchAll
select * from user;
--fetchOne
select * from user where id = 1;
--createOne
insert into user (full_name, email, photo, start_date, description, phone_number, status) values
	('John Doe', 'john.doe@example.com', 'https://robohash.org/JohnDoe.png?set=any', '2020-05-15', 'Front Desk Manager', '+1 (123) 456-7890', 'active'),
--deleteOne
delete from user where id = 10;
--updateOne
update user
	SET full_name = 'John Doe', email = 'john.doe@example.com', photo = 'https://robohash.org/JohnDoe.png?set=any', start_date = '2020-05-15', description = 'Front Desk Manager', phone_number = '+1 (123) 456-7890', status = 'active'
    WHERE id = 5;