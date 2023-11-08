import mysql, { PoolOptions, ResultSetHeader } from 'mysql2/promise';
import 'dotenv/config';

const user: string = process.env.SECRET_SQL_USER || '';
const password: string = process.env.SECRET_SQL_PASSWORD || '';
const database: string = process.env.DATABASE || '';

const access: PoolOptions  = {
    host: 'localhost',
    user: user,
    database: database,
    password: password,
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
};
console.log('conectado a sql')

const pool = mysql.createPool(access)

export const SelectQuery = async (queryString: string, params?: any[]) => {
	const [results] = await pool.execute(queryString, params)
	return results
}

export const ModifyQuery = async (
	queryString: string,
	params?: any[]
): Promise<ResultSetHeader> => {
	const [results] = await pool.query(queryString, params)
	return results as ResultSetHeader
}
export const disconnect = async () => {
    await pool.end()
}