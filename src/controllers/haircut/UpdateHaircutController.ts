import { Request, Response } from "express";
import { UpdateHaircutService } from "../../services/haircut/UpdateHaircutService";

class UpdateHaircutController {
    async handle(req: Request, res: Response){
        const { haircutId, name, price } = req.body;

        const updateHaircutService = new UpdateHaircutService();
        const haircut = updateHaircutService.execute({ haircutId, name, price })
        return res.json(haircut);
    }
}

export { UpdateHaircutController }