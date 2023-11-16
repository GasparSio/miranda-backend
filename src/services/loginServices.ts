import jwt from "jsonwebtoken";
import 'dotenv/config';
import { User } from "../models/usersModel";
import  bcrypt  from 'bcryptjs';

const secret: string = process.env.SECRET_KEY || '';

async function login(email: string, password: string) {
    try {
        const result = await User.findOne({email: email})
        console.log('usuario', result);
        
        if(!result) {
            throw new Error('Users not found')
        } 
        const passwordMatch = await bcrypt.compare(password, result.password || '')
        console.log('passwordMatch', passwordMatch);
        
        if(!passwordMatch){
            throw new Error('email or password incorrect')
        }
        return signJWT({email});
    } catch (error) {
        throw new Error('Authentication failed');
    }
}
// async function login(email: string, password: string) {
//     if (email === defaultUserEmail.email && password === defaultUserEmail.password) return signJWT({ email })
//     throw new Error('Wrong username or email!')
// }

function signJWT(payload: { email: string}) {
    // Sign the jwt token
    const token = jwt.sign(payload, secret, {expiresIn: '10h'});
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
  