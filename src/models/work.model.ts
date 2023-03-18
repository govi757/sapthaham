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



const workSchema = new Schema<IWork>({
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

const Work = model<IWork>('Work', workSchema);

export default Work;
