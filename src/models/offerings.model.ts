import { Schema, model } from 'mongoose';

interface IWork {
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

}

enum WorkType {
    Poem, Story,
}

export enum WorkStatus {
    Draft = "Draft", Approved = "Approved", Reported = "Reported"
}



const workSchema = new Schema<any>({
    devoteeName: { type: String, required: true },
    devoteeStar: { type: String, required: true },
    offeringName: { type: String, required: true },
    offeringRate: { type: String, required: true },
    offeringStatus: { type: String, required: true },
    lastUpdatedBy: { type: String, required: true },
    requestedAt: { type: Date, required: true },

});

const Work = model<IWork>('Work', workSchema);

export default Work;
