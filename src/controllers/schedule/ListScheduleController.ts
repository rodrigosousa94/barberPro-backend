import { Request, Response } from "express";
import { ListScheduleService } from "../../services/schedule/ListScheduleService";

class ListScheduleController {
    async handle(req: Request, res: Response){
        const userId = req.userId;

        const listSchedule = new ListScheduleService();
        const list = await listSchedule.execute({userId});
        return res.json(list);
    }
}

export { ListScheduleController };