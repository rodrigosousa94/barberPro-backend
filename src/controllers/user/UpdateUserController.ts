import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
    async handle(req: Request, res: Response){
        const {name, endereco} = req.body;
        const id = req.userId

        const updateUserService = new UpdateUserService();
        const user = await updateUserService.execute({id, name, endereco});
        return res.json(user);
    }
}

export { UpdateUserController };