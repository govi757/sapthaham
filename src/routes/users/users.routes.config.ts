import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import User from '../../models/user.model';
import UserService from './users.service';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }
    userService = new UserService();

    configureRoutes(): express.Application {
        // console.log("users")
        // this.app.route(`/users`)
        // .get((req: express.Request, res: express.Response) => {
        //     res.status(200).send(`List of users`);
        // })
        // .post((req: express.Request, res: express.Response) => {
        //     res.status(200).send(`Post to users`);
        // });
        this.app.route('/register-admin').post(async (req: express.Request, res: express.Response) => {
            this.userService.registerAdmin(req, res);
        });

        this.app.route('/login').post(async (req: express.Request, res: express.Response) => {
            this.userService.login(req, res);
        });

        
        return this.app;
    }
}