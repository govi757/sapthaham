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
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String },
    workImgUrl: { type: String },
    tag: { type: String },
    writterName: { type: String },
    writterImgUrl: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    workType: { type: String },
    workStatus: { type: String },
    language: { type: String },
    createdBy: { type: String }
});
const Work = (0, mongoose_1.model)('Work', workSchema);
exports.default = Work;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvd29yay5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBeUM7QUFvQnpDLElBQUssUUFFSjtBQUZELFdBQUssUUFBUTtJQUNULHVDQUFJLENBQUE7SUFBRSx5Q0FBSyxDQUFBO0FBQ2YsQ0FBQyxFQUZJLFFBQVEsS0FBUixRQUFRLFFBRVo7QUFFRCxJQUFZLFVBRVg7QUFGRCxXQUFZLFVBQVU7SUFDbEIsNkJBQWUsQ0FBQTtJQUFFLG1DQUFxQixDQUFBO0lBQUUsbUNBQXFCLENBQUE7QUFDakUsQ0FBQyxFQUZXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBRXJCO0FBSUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBTSxDQUFRO0lBQ2pDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN2QyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDN0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUN6QixVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQzVCLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDckIsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUM3QixhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQy9CLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDekIsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUN6QixRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQzFCLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDNUIsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUMxQixTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0NBRzlCLENBQUMsQ0FBQztBQUVILE1BQU0sSUFBSSxHQUFHLElBQUEsZ0JBQUssRUFBUSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFFOUMsa0JBQWUsSUFBSSxDQUFDIn0=