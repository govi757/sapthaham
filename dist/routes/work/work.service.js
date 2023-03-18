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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const modelData_1 = require("../../data/modelData");
const work_model_1 = __importStar(require("../../models/work.model"));
class WorkService {
    addWork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const requiredFieldErrorList = modelData_1.IWorkModel.checkRequiredFields(req.body);
            if (requiredFieldErrorList.length > 0) {
                return res.status(400).send({ msg: `${requiredFieldErrorList} are required` });
            }
            else {
                try {
                    const work = work_model_1.default.create({
                        title: req.body.title,
                        description: req.body.description,
                        content: req.body.content,
                        createdAt: new Date(),
                        tag: req.body.tag,
                        workType: req.body.workType,
                        writterName: req.body.writterName,
                        writterImgUrl: req.body.writterImgUrl,
                        writterDetails: req.body.writterDetails,
                        workStatus: work_model_1.WorkStatus.Draft.toString()
                    });
                    return res.status(200).json(work);
                }
                catch (e) {
                    return res.status(500).send(e);
                }
            }
        });
    }
    getAllWorksList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = req.params.page ? Number(req.params.page) : 0;
                const rowsPerPAge = req.params.rowsPerPAge ? Number(req.params.rowsPerPAge) : 20;
                const worksList = yield work_model_1.default.find().limit(rowsPerPAge).skip(rowsPerPAge * page);
                res.send(worksList);
            }
            catch (e) {
                res.status(500).send("Error" + e);
            }
        });
    }
    getApprovedWorksList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = req.params.page ? Number(req.params.page) : 0;
                const rowsPerPAge = req.params.rowsPerPAge ? Number(req.params.rowsPerPAge) : 20;
                const worksList = yield work_model_1.default.find({ workStatus: work_model_1.WorkStatus.Approved }).limit(rowsPerPAge).skip(rowsPerPAge * page);
                res.send(worksList);
            }
            catch (e) {
                res.status(500).send("Error" + e);
            }
        });
    }
    approveWork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const work = yield work_model_1.default.findByIdAndUpdate(req.body.workId, { workStatus: work_model_1.WorkStatus.Approved });
                res.send(work);
            }
            catch (e) {
                res.status(500).send("Error" + e);
            }
        });
    }
    updateWork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const work = yield work_model_1.default.findOneAndUpdate({ _id: req.body.workId }, req.body);
                res.send(work);
            }
            catch (e) {
                res.status(500).send("Error" + e);
            }
        });
    }
}
exports.default = WorkService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy93b3JrL3dvcmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0RBQWtEO0FBQ2xELHNFQUEyRDtBQUMzRCxNQUFxQixXQUFXO0lBQ2YsT0FBTyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzVELE1BQU0sc0JBQXNCLEdBQUcsc0JBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEUsSUFBSSxzQkFBc0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsc0JBQXNCLGVBQWUsRUFBRSxDQUFDLENBQUM7YUFDbEY7aUJBQU07Z0JBQ0gsSUFBSTtvQkFDQSxNQUFNLElBQUksR0FBRyxvQkFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFDckIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDckIsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVzt3QkFDakMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTzt3QkFDekIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO3dCQUNyQixHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO3dCQUNqQixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO3dCQUMzQixXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXO3dCQUNqQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhO3dCQUNyQyxjQUFjLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjO3dCQUN2QyxV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