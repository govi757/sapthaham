import express from 'express';
import { IWorkModel } from '../../data/modelData';
import Work, { WorkStatus } from '../../models/work.model';
export default class WorkService {
    public async addWork(req: express.Request, res: express.Response) {
        const requiredFieldErrorList = IWorkModel.checkRequiredFields(req.body);
        if (requiredFieldErrorList.length > 0) {
            return res.status(400).send({ msg: `${requiredFieldErrorList} are required` });
        } else {
            try {
                const work = Work.create({
                    title: req.body.title,
                    description: req.body.description,
                    content: req.body.content,
                    createdAt: new Date(),
                    tag: req.body.tag,
                    workType: req.body.workType,
                    writterName: req.body.writterName,
                    writterImgUrl: req.body.writterImgUrl,
                    writterDetails: req.body.writterDetails,
                    workStatus: WorkStatus.Draft.toString()
                })
                return res.status(200).json(work);
            } catch (e) {
                return res.status(500).send(e);
            }
        }
    }

    public async getAllWorksList(req: express.Request, res: express.Response) {
        try {
            const page = req.params.page ? Number(req.params.page) : 0
            const rowsPerPAge = req.params.rowsPerPAge ? Number(req.params.rowsPerPAge) : 20
            const worksList = await Work.find().limit(rowsPerPAge).skip(rowsPerPAge * page)
            res.send(worksList)
        } catch (e) {
            res.status(500).send("Error" + e)
        }
    }

    public async getApprovedWorksList(req: express.Request, res: express.Response) {
        try {

            const page = req.params.page ? Number(req.params.page) : 0
            const rowsPerPAge = req.params.rowsPerPAge ? Number(req.params.rowsPerPAge) : 20
            const worksList = await Work.find({ workStatus: WorkStatus.Approved }).limit(rowsPerPAge).skip(rowsPerPAge * page)
            res.send(worksList)
        } catch (e) {
            res.status(500).send("Error" + e)
        }
    }


    public async approveWork(req: express.Request, res: express.Response) {
        try {
            const work = await Work.findByIdAndUpdate(req.body.workId, { workStatus: WorkStatus.Approved });
            res.send(work);
        } catch (e) {
            res.status(500).send("Error" + e)
        }
    }


    public async updateWork(req: express.Request, res: express.Response) {
        try {
            const work = await Work.findOneAndUpdate({ _id: req.body.workId }, req.body);
            res.send(work);
        } catch (e) {
            res.status(500).send("Error" + e)
        }
    }


}