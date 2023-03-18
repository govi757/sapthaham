"use strict";
// export interface IAddress {
//     city: string,
//     state: string,
//     country: string,
//     location?: string,
//     addressLane: string
// } 
Object.defineProperty(exports, "__esModule", { value: true });
exports.IWorkModel = exports.WorkStatus = exports.WorkType = void 0;
var WorkType;
(function (WorkType) {
    WorkType[WorkType["Poem"] = 0] = "Poem";
    WorkType[WorkType["Story"] = 1] = "Story";
})(WorkType = exports.WorkType || (exports.WorkType = {}));
var WorkStatus;
(function (WorkStatus) {
    WorkStatus["Draft"] = "Draft";
    WorkStatus["Approved"] = "Approved";
    WorkStatus["Reported"] = "Reported";
})(WorkStatus = exports.WorkStatus || (exports.WorkStatus = {}));
class IWorkModel {
    constructor(props) {
        this.workData = props;
    }
    static fromJson(o = {}) {
        return new IWorkModel({
            title: o.title,
            description: o.description,
            workType: o.workType,
            workImgUrl: o.workImgUrl,
            workStatus: o.workStatus,
            content: o.content,
            createdAt: o.createdAt,
            createdBy: o.createdBy,
            updatedAt: o.updatedAt,
            writterName: o.writterName,
            writterDetails: o.writterDetails,
            language: o.language,
            tag: o.tag,
            writterImgUrl: o.writterImgUrl
        });
    }
    toJson() {
        return {
            title: this.workData.title,
            description: this.workData.description,
            workType: this.workData.workType,
            workImgUrl: this.workData.workImgUrl,
            workStatus: this.workData.workStatus,
            content: this.workData.content,
            createdAt: this.workData.createdAt,
            createdBy: this.workData.createdBy,
            updatedAt: this.workData.updatedAt,
            writterName: this.workData.writterName,
            writterDetails: this.workData.writterDetails,
            language: this.workData.language,
            tag: this.workData.tag,
            writterImgUrl: this.workData.writterImgUrl
        };
    }
    static checkRequiredFields(body = {}) {
        const iWork = this.fromJson(body);
        const reqErrorList = [];
        Object.keys(iWork.workData).map(item => {
            if (this.requiredFields.includes(item)) {
                if (iWork.toJson()[item] === undefined) {
                    reqErrorList.push(item);
                }
            }
        });
        return reqErrorList;
    }
}
exports.IWorkModel = IWorkModel;
IWorkModel.requiredFields = ['title', 'description', 'content', 'language'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxEYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvbW9kZWxEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4QkFBOEI7QUFDOUIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkIseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQixLQUFLOzs7QUFFTCxJQUFZLFFBRVg7QUFGRCxXQUFZLFFBQVE7SUFDaEIsdUNBQUksQ0FBQTtJQUFFLHlDQUFLLENBQUE7QUFDZixDQUFDLEVBRlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFFbkI7QUFFRCxJQUFZLFVBRVg7QUFGRCxXQUFZLFVBQVU7SUFDbEIsNkJBQWUsQ0FBQTtJQUFFLG1DQUFxQixDQUFBO0lBQUUsbUNBQXFCLENBQUE7QUFDakUsQ0FBQyxFQUZXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBRXJCO0FBR0QsTUFBYSxVQUFVO0lBa0JuQixZQUFZLEtBZVg7UUFDRyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFTLEVBQUU7UUFDOUIsT0FBTyxJQUFJLFVBQVUsQ0FBQztZQUNsQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUs7WUFDZCxXQUFXLEVBQUUsQ0FBQyxDQUFDLFdBQVc7WUFDMUIsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO1lBQ3BCLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVTtZQUN4QixVQUFVLEVBQUUsQ0FBQyxDQUFDLFVBQVU7WUFDeEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUztZQUN0QixTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVM7WUFDdEIsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTO1lBQ3RCLFdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVztZQUMxQixjQUFjLEVBQUUsQ0FBQyxDQUFDLGNBQWM7WUFDaEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO1lBQ3BCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRztZQUNWLGFBQWEsRUFBRSxDQUFDLENBQUMsYUFBYTtTQUNqQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU87WUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQzFCLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDdEMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtZQUNoQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO1lBQ3BDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFDcEMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztZQUM5QixTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTO1lBQ2xDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFDbEMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztZQUNsQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXO1lBQ3RDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWM7WUFDNUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtZQUNoQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHO1lBQ3RCLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7U0FDN0MsQ0FBQTtJQUNMLENBQUM7SUFJTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBVSxFQUFFO1FBQzFDLE1BQU0sS0FBSyxHQUFlLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsTUFBTSxZQUFZLEdBQVcsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQyxJQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQyxJQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBRyxTQUFTLEVBQUM7b0JBQ2hDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQzFCO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sWUFBWSxDQUFBO0lBQ3ZCLENBQUM7O0FBeEZMLGdDQXlGQztBQXhFaUIseUJBQWMsR0FBRyxDQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQyxDQUFDIn0=