"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkStatus = void 0;
const mongoose_1 = require("mongoose");
var WorkType;
(function (WorkType) {
    WorkType[WorkType["Poem"] = 0] = "Poem";
    WorkType[WorkType["Story"] = 1] = "Story";
})(WorkType || (WorkType = {}));
var WorkStatus;
(function (WorkStatus) {
    WorkStatus["Draft"] = "Draft";
    WorkStatus["Approved"] = "Approved";
    WorkStatus["Reported"] = "Reported";
})(WorkStatus = exports.WorkStatus || (exports.WorkStatus = {}));
const workSchema = new mongoose_1.Schema({
    devoteeName: { type: String, required: true },
    devoteeStar: { type: String, required: true },
    offeringName: { type: String, required: true },
    offeringRate: { type: String, required: true },
    offeringStatus: { type: String, required: true },
    lastUpdatedBy: { type: String, required: true },
    requestedAt: { type: Date, required: true },
});
const Work = (0, mongoose_1.model)('Work', workSchema);
exports.default = Work;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmZXJpbmdzLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9vZmZlcmluZ3MubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQXlDO0FBb0J6QyxJQUFLLFFBRUo7QUFGRCxXQUFLLFFBQVE7SUFDVCx1Q0FBSSxDQUFBO0lBQUUseUNBQUssQ0FBQTtBQUNmLENBQUMsRUFGSSxRQUFRLEtBQVIsUUFBUSxRQUVaO0FBRUQsSUFBWSxVQUVYO0FBRkQsV0FBWSxVQUFVO0lBQ2xCLDZCQUFlLENBQUE7SUFBRSxtQ0FBcUIsQ0FBQTtJQUFFLG1DQUFxQixDQUFBO0FBQ2pFLENBQUMsRUFGVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUVyQjtBQUlELE1BQU0sVUFBVSxHQUFHLElBQUksaUJBQU0sQ0FBTTtJQUMvQixXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDN0MsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzdDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM5QyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDOUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ2hELGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUMvQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FFOUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxJQUFJLEdBQUcsSUFBQSxnQkFBSyxFQUFRLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUU5QyxrQkFBZSxJQUFJLENBQUMifQ==