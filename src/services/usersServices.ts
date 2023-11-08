import usersData from '../data/usersData.json';
import { usersInterface } from "../interfaces/usersInterface";
import { SelectQuery } from '../util/connecionSQL';

export const users = usersData

async function fetchAll() {
  const query = 'select * from user;'
  const values: any[] = [];
  const result = await SelectQuery(query, values)
  return result;
}

async function fetchOne(userId: string) {
  const query = `select * from user WHERE id = ?;`
  const values = [userId]
  const result = await SelectQuery(query, values)
  return result;
}

async function deleteUser(userId: string) {
  const query = 'delete from contact where id = ?;';
  const values = [userId];
  const result = await SelectQuery(query, values);
  return result;
}


async function createOneUser(user: usersInterface) {
  const query =
  `INSERT INTO user 
  (full_name, email, photo, start_date, description, phone_number, status) 
  values 
  (?, ?, ?, ?, ?, ?, ?);`
  const values = [
    user.full_name,
    user.email,
    user.photo,
    user.start_date,
    user.description,
    user.phone_number,
    user.status
  ]
  const result = await SelectQuery(query, values)
  return result;
}

async function updateOneUser(userId: string, update: Partial<usersInterface>) {
	const query =
  `UPDATE user 
  SET full_name=?, email=?, photo=?, start_date=?, description=?, phone_number=?, status=?
  WHERE id =?;`
  const values = [
    update.full_name,
    update.email,
    update.photo,
    update.start_date,
    update.description,
    update.phone_number,
    update.status,
    userId
  ]
  const result = await SelectQuery(query, values)
	return result
}

export const usersServices = {
    fetchAll,
    fetchOne,
    createOneUser,
    updateOneUser,
    delete: deleteUser,
};