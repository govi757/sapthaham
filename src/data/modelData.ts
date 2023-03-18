// export interface IAddress {
//     city: string,
//     state: string,
//     country: string,
//     location?: string,
//     addressLane: string
// } 

export enum WorkType {
    Poem, Story,
}

export enum WorkStatus {
    Draft = "Draft", Approved = "Approved", Reported = "Reported"
}


export class IWorkModel {
    workData: {
        title: string,
        description: string,
        workType?: WorkType;
        workImgUrl?: string,
        content: string,
        createdAt: Date,
        createdBy: string,
        updatedAt: Date,
        tag?: string,
        writterName?: string,
        writterImgUrl?: string,
        writterDetails?: string,
        workStatus?: WorkStatus
        language: String
    };
    public static requiredFields = ['title','description','content','language'];
    constructor(props: {
        title: string,
        description: string,
        workType?: WorkType;
        workImgUrl?: string,
        content: string,
        createdAt: Date,
        createdBy: string,
        updatedAt: Date,
        tag?: string,
        writterName?: string,
        writterImgUrl?: string,
        writterDetails?: string,
        workStatus?: WorkStatus
        language: String
    }) {
        this.workData = props;
    }

    public static fromJson(o: any = {}) {
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
        })
    }

    public toJson(): any {
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
        }
    }



    public static checkRequiredFields(body: any={}) {
        const iWork: IWorkModel = this.fromJson(body);
        const reqErrorList: any[]  = [];
        Object.keys(iWork.workData).map(item => {
            if(this.requiredFields.includes(item)) {
                if(iWork.toJson()[item]===undefined){
                    reqErrorList.push(item)
                }
            }
        });
        return reqErrorList
    }
}