import { Request, Response } from "express";
import { CountHaircutsService } from "../../services/haircut/CountHaircutsService";

class CountHaircutsController {
    async handle(req: Request, res: Response){
        const userId = req.userId;

        const countHaircut = new CountHaircutsService();
        const count = await countHaircut.execute({userId});

        return res.json(count);
    }
}

export { CountHaircutsController };