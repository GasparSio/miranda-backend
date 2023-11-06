import usersData from '../data/usersData.json';
import { usersInterface } from "../interfaces/usersInterface";
import { SelectQuery } from '../util/connecionSQL';

export const users = usersData

async function fetchAll() {
  const result = await SelectQuery(
    'select * from user;')
  return result;
}

async function fetchOne(userId: string) {
  const result = await SelectQuery(
    `select * from user WHERE id = ${userId};`)
  return result;
}

async function deleteUser(userId: string) {
  const result = await SelectQuery(
    `delete from user where id = ${userId};`)
  return result;
}

async function updateOneUser(userId: string, update: Partial<usersInterface>) {
  // const id = userId.toString()
const currentUserIndex = users.findIndex((user) => user.employee_id === userId)
  if (currentUserIndex === -1) throw new Error('User not found')
  const result = (users[currentUserIndex] = {
    ...users[currentUserIndex],
    ...update,
  })
return result
}

async function createOneUser(user: usersInterface) {
    const initialUsersLength = users.length;
    await users.push(user);
    if (users.length === initialUsersLength) {
      throw new Error('Error creating a new User');
    }
    return user;
}


export const usersServices = {
    fetchAll,
    fetchOne,
    createOneUser,
    updateOneUser,
    delete: deleteUser,
};