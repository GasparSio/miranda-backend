import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";


export const generateValidateMiddleware = (schema: ObjectSchema<any>) => {
    const validateMiddleware = (req: Request, res: Response,next: NextFunction) => {
        const { error } = schema.validate(req.body, {abortEarly: false})
        if(error){
            res.status(400).json({error: true, message: error.message})
        }
        next()
    }
    return validateMiddleware
}


