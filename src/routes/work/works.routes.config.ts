import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import verifyToken from '../../middlewares/auth';
import WorkService from './work.service';

export class WorkRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'WorkRoutes');
    }
     workService = new WorkService();
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjc2NzQ5NTcxLCJleHAiOjE2OTIzMDE1NzF9.zz0UFTZb-vAb7C72RhA-n06v0ep5xgg59K_IJPI9TyQ
    configureRoutes(): express.Application {

        this.app.route('/add-work').post(verifyToken,(req: express.Request, res: express.Response) => {
            this.workService.addWork(req, res);
         });

         this.app.route('/update-work').post(verifyToken,(req: express.Request, res: express.Response) => {
            this.workService.updateWork(req, res);
         });

         this.app.route('/approve-work').post(verifyToken,(req: express.Request, res: express.Response) => {
            this.workService.approveWork(req, res);
         });

         this.app.route('/all-works-list').get(verifyToken,(req: express.Request, res: express.Response) => {
            this.workService.getAllWorksList(req, res);
         });

         this.app.route('/approved-works-list').get(verifyToken,(req: express.Request, res: express.Response) => {
            this.workService.getApprovedWorksList(req, res);
         });
        
        return this.app;
    }
}