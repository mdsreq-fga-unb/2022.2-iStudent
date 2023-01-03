import { NextFunction, Request, Response } from "express";
import { verify } from "../../infra/auth/jwt";

export default function auth(userType?: 'STUDENT' | 'TEACHER'){
    return (req: Request,res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization
            const tokenParsed = token.replace('Bearer ', '')
            const user = verify(tokenParsed)
            req.user = user
            next()
        } catch (error) {
            res.status(400).json({
                error: error.message
            })
        }
    }
}