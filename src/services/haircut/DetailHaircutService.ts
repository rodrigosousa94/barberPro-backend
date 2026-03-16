import prismaClient from '../../prisma'

interface DetailHaircut {
    userId: string;
    haircutId: string;
}

class DetailHaircutService {
    async execute({userId, haircutId}: DetailHaircut){
        const haircutDetail = await prismaClient.haircut.findFirst({
            where: {
                id: haircutId,
                userId: userId
            }
        })

        if (!haircutDetail) {
            throw new Error("Haircut not found");
        }

        return haircutDetail
    }
}

export { DetailHaircutService }