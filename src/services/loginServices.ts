import jwt from "jsonwebtoken";
import 'dotenv/config';

const defaultUserEmail = {
    username: "gaspar",
    email: "sio@gmail.com",
};

const secret: string = process.env.SECRET_KEY || '';

async function login(username: string, email: string) {
    if (username === defaultUserEmail.username && email === defaultUserEmail.email) return signJWT({ username })
    throw new Error('Wrong username or email!')
}
  
function signJWT(payload: { username: string }) {
    // Sign the jwt token
    const token = jwt.sign(payload, secret);
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
  