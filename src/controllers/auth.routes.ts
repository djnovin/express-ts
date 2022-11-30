import { Request, Response } from 'express';
import bcrypt from 'bcrypt'

export const login = (req: Request, res:Response, next: NextFunction) => {
    passport.authenticate('local', (err, user, info) => {
        if (err){
            return next(err);
        }
    })
}