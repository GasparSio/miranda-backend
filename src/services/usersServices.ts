import { usersInterface } from "../interfaces/usersInterface";
import { users } from '../models/usersModel';


async function fetchAll() {
  const usersResult = await users.find()
  if (usersResult.length === 0){
    throw new Error("Error on finding users");
  } 
  return usersResult;
}

async function fetchOne(userId: string) {
  const userResult = await users.findById(userId);
  if (!userResult) {
    throw new Error("Error on finding users with this ID");
  } 
  return userResult;
}

async function deleteUser(userId: string) {
const userResult = await users.findByIdAndDelete(userId)
  if (!userResult) {
    throw new Error('User not found')
  }else{
    return userResult
  }
}

async function updateOneUser(userId: string, update: Partial<usersInterface>) {
const userResult = await users.findByIdAndUpdate(userId, update)
  if (!userResult) {
    throw new Error('User not found')
  }
  return userResult
}

async function createOneUser(user: usersInterface) {
    const userResult = await users.create(user);
    if (!userResult) {
      throw new Error('Error creating a new User');
    }
    return userResult;
}

export const usersServices = {
    fetchAll,
    fetchOne,
    createOneUser,
    updateOneUser,
    delete: deleteUser,
};