import usersData from '../data/usersData.json';
import { usersInterface } from "../interfaces/usersInterface";

export const users = usersData

async function fetchAll() {
  const usersResult = await users
  if (usersResult.length === 0){
    throw new Error("Error on finding users");
  } 
  return usersResult;
}

async function fetchOne(userId: string) {
  const userResult = await users.filter((user) => user.employee_id === userId);
  if (userResult.length === 0) {
    throw new Error("Error on finding users with this ID");
  } 
  return userResult;
}

async function deleteUser(userId: string) {
  // const id = userId.toString()
const currentUserIndex = users.findIndex((user) => user.employee_id === userId)

  if (currentUserIndex === -1) {
    throw new Error('User not found')
  }else{
    const result = await users.splice(currentUserIndex, 1)
    return result
  }
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