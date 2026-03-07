import prismaClient from "../../prisma";

interface HaircutList {
    userId: string;
    status: boolean | string;
}

class ListHaircutService {
    async execute({userId, status}: HaircutList){
        if(!userId){
            throw new Error("userId is not defined!");
        }

        const haircuts = await prismaClient.haircut.findMany({
            where: {
                userId,
                status: status  === 'true' ? true : false
            }
        })

        return haircuts
    }
}

export { ListHaircutService }