import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import { CommonRoutesConfig } from './routes/common/common.routes.config';
import { UsersRoutes } from './routes/users/users.routes.config';
import debug from 'debug';

import bodyParser, { json, urlencoded } from 'body-parser';
import mongoose from 'mongoose';
import { WorkRoutes } from './routes/work/works.routes.config';

const app: express.Application = express();

const port = 80;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');
app.use((err: any, req: express.Request, res: express.Response, next: any) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});
app.use(express.json());

app.use(cors());
app.use(urlencoded());
app.use(json());
const path = require('path');


routes.push(new UsersRoutes(app));
routes.push(new WorkRoutes(app));
const mongoDB = "mongodb://127.0.0.1/vaishnavam";
mongoose.set('strictQuery', false);

const runningMessage = `Server running ats http://localhost:${port}`;

app.use(express.static(path.join(__dirname, 'client-build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client-build', 'index.html'));
});


const server: http.Server = http.createServer(app);


server.listen(port, () => {
    // try {
    //     mongoose.connect(mongoDB).then(mongoConnection => {
    //         console.log("Succesfully connected to the data base", routes)
    //     })
    //     console.log(runningMessage);
    //     routes.forEach((route: CommonRoutesConfig) => {

    //     });
    // } catch (error) {

    // }
    // our only exception to avoiding console.log(), because we
    // always want to know when the server is done starting up

});