"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const cors_1 = __importDefault(require("cors"));
const users_routes_config_1 = require("./routes/users/users.routes.config");
const debug_1 = __importDefault(require("debug"));
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const works_routes_config_1 = require("./routes/work/works.routes.config");
const app = (0, express_1.default)();
const port = 80;
const routes = [];
const debugLog = (0, debug_1.default)('app');
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, body_parser_1.urlencoded)());
app.use((0, body_parser_1.json)());
const path = require('path');
routes.push(new users_routes_config_1.UsersRoutes(app));
routes.push(new works_routes_config_1.WorkRoutes(app));
const mongoDB = "mongodb://127.0.0.1/vaishnavam";
mongoose_1.default.set('strictQuery', false);
const runningMessage = `Server running ats http://localhost:${port}`;
app.use(express_1.default.static(path.join(__dirname, 'client-build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client-build', 'index.html'));
});
const server = http.createServer(app);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLDJDQUE2QjtBQUk3QixnREFBd0I7QUFFeEIsNEVBQWlFO0FBQ2pFLGtEQUEwQjtBQUUxQiw2Q0FBMkQ7QUFDM0Qsd0RBQWdDO0FBQ2hDLDJFQUErRDtBQUUvRCxNQUFNLEdBQUcsR0FBd0IsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFM0MsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLE1BQU0sTUFBTSxHQUE4QixFQUFFLENBQUM7QUFDN0MsTUFBTSxRQUFRLEdBQW9CLElBQUEsZUFBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFRLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQVMsRUFBRSxFQUFFO0lBQ3pFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7QUFDNUMsQ0FBQyxDQUFDLENBQUM7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV4QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQztBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsd0JBQVUsR0FBRSxDQUFDLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGtCQUFJLEdBQUUsQ0FBQyxDQUFDO0FBQ2hCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUc3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxnQ0FBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsTUFBTSxPQUFPLEdBQUcsZ0NBQWdDLENBQUM7QUFDakQsa0JBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRW5DLE1BQU0sY0FBYyxHQUFHLHVDQUF1QyxJQUFJLEVBQUUsQ0FBQztBQUVyRSxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU5RCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLEdBQUcsRUFBRSxHQUFHO0lBQzNCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDckUsQ0FBQyxDQUFDLENBQUM7QUFHSCxNQUFNLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUduRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckIsUUFBUTtJQUNSLDBEQUEwRDtJQUMxRCx3RUFBd0U7SUFDeEUsU0FBUztJQUNULG1DQUFtQztJQUNuQyxzREFBc0Q7SUFFdEQsVUFBVTtJQUNWLG9CQUFvQjtJQUVwQixJQUFJO0lBQ0osMkRBQTJEO0lBQzNELDBEQUEwRDtBQUU5RCxDQUFDLENBQUMsQ0FBQyJ9