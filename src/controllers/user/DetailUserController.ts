import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
    async handle(req: Request, res: Response) {
        const userId = req.userId;
        const userDetailService = new DetailUserService();
        const detailUser = await userDetailService.execute(userId);
        return res.json(detailUser);
    }
}

export { DetailUserController };