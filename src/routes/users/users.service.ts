import express from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../../models/user.model';
export default class UserService {
public async registerAdmin(req: express.Request, res: express.Response) {
    try {
        const user = await User.create({
            userName: req.body.userName,
            password: req.body.password,
            role: "admin",
            email: req.body.email,
        });
        return res.status(200).json(user);
    } catch (e) {
        return res.status(500).send(e);
    }
}


public async login(req: express.Request, res: express.Response) {
    try {
        const user:IUser|null =await User.findOne({userName: req.body.userName});

        console.log(user)
        if(req.body.password === user?.password) {
            const token = jwt.sign({userName: user?.userName, role:user?.role},'VachaVadhyan',{expiresIn:'180d'});
            return res.status(200).json({token});
        } else {
            return res.status(401).send("Wrong password");    
        }
        
    } catch (e) {
        return res.status(500).send(e);
    }
}
}