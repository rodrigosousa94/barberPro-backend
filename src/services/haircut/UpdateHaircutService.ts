import prismaClient from "../../prisma";

interface HaircutModel {
    userId: string;
    haircutId: string;
    name: string;
    price: number;
    status: boolean | string;
}

class UpdateHaircutService {
    async execute({ userId, haircutId, name, price, status = true }){
        try{
            const user = await prismaClient.user.findFirst({
                where: {
                    id: userId
                },
                include: {
                    subscriptions: true,
                }
            })

            if(user?.subscriptions?.status !== "active") {
                throw new Error("Not authorized")
            }

            const haircutUpdated = await prismaClient.haircut.update({
                where: {
                    id: haircutId
                },
                data: {
                    name,
                    price,
                    status: status == true ? true : false
                }
            })

            return haircutUpdated
        }catch(err){
            console.log(err);
            throw new Error("Error updating haircut");
        }
    }
}

export { UpdateHaircutService }