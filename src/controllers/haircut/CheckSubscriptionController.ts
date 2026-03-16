import { Request, Response } from "express";
import { CheckSubscriptionService } from "../../services/haircut/CheckSubscriptionService";

class CheckSubscriptionController {
    async handle(req: Request, res: Response) {
        const userId = req.userId;

        const checkSubscription = new CheckSubscriptionService();
        const checked = await checkSubscription.execute({userId});
        return res.json(checked);
    }
}

export { CheckSubscriptionController }