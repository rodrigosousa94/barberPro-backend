import { Request, Response } from "express";
import { DetailHaircutService } from "../../services/haircut/DetailHaircutService";

class DetailHaircutController {
    async handle(req: Request<{ haircutId: string }>, res: Response) {
        const userId = req.userId;
        const {haircutId} = req.params;

        const haircutDetail = new DetailHaircutService();
        const detail = await haircutDetail.execute({userId, haircutId});

        return res.json(detail)
    }
}

export { DetailHaircutController }