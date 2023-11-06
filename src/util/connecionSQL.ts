import mysql from 'mysql2/promise';
import 'dotenv/config';

const user: string = process.env.SECRET_SQL_USER || '';
const password: string = process.env.SECRET_SQL_PASSWORD || '';

const connection = mysql.createPool({
    host: 'localhost',
    user: user,
    database: 'miranda_hotel',
    password: password
});
console.log('conectado a sql')

export const SelectQuery = async (queryString: string) => {
	const [results] = await connection.execute(queryString)
	return results
}

