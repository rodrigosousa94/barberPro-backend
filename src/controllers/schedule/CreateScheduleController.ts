import { Request, Response } from "express";
import { CreateScheduleService } from "../../services/schedule/CreateScheduleService";

class CreateScheduleController {
    async handle(req: Request, res: Response){
        const userId = req.userId;
        const {customer, haircutId} = req.body;

        const createSchedule = new CreateScheduleService();
        const schedule = await createSchedule.execute({userId, customer, haircutId});
        res.json(schedule);
    }
}

export { CreateScheduleController };