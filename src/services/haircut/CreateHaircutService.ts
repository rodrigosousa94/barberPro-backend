import prismaClient from "../../prisma";

interface HaircutModel {
    userId: string;
    name: string;
    price: number;
}

class CreateHaircutService {
    async execute({userId, name, price}: HaircutModel){
        if(!name || !price){
            throw new Error("Name and price is required!");
        }

        const myHaircuts = await prismaClient.haircut.count({
            where: {
                userId
            }
        });

        const user = await prismaClient.user.findFirst({
            where: {
                id: userId
            },
            include: {
                subscriptions: true,
            }
        });

        if(myHaircuts >= 3 && user?.subscriptions?.status !== 'active'){
            throw new Error("You have already reached the limit of haircuts for the free plan.")
        }

        const haircut = await prismaClient.haircut.create({
            data: {
                name,
                price,
                userId
            }
        });

        return haircut
    };
};

export { CreateHaircutService };