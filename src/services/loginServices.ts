import jwt from "jsonwebtoken";
import 'dotenv/config';
import { User } from "../models/usersModel";

// const defaultUserEmail = {
//     email: "sio.gaspar@gmail.com",
//     password: "admin",
// };

const secret: string = process.env.SECRET_KEY || '';

async function login(email: string, password: string) {
    const result = await User.findOne({email: email, password: password})
    if(!result){
        throw new Error('User not found')
    }
    return signJWT({email, password});
}
// async function login(email: string, password: string) {
//     if (email === defaultUserEmail.email && password === defaultUserEmail.password) return signJWT({ email })
//     throw new Error('Wrong username or email!')
// }
  
function signJWT(payload: { email: string , password: string}) {
    // Sign the jwt token
    const token = jwt.sign(payload, secret, {expiresIn: '10y'});
    return { payload, token };
}
  
function verifyJWT(token: string) {
    // Verify the jwt token
    const verifiedResult = jwt.verify(token, secret)
    return verifiedResult;
}
  
export const authService = {
    login,
    signJWT,
    verifyJWT,
};
  