import prismaClient from '../../prisma'

interface DetailHaircut {
    haircutId: string;
}

class DetailHaircutService {
    async execute({ haircutId }: DetailHaircut){
        const haircutDetail = await prismaClient.haircut.findFirst({
            where: {
                id: haircutId
            }
        })

        if (!haircutDetail) {
            throw new Error("Haircut not found");
        }

        return haircutDetail
    }
}

export { DetailHaircutService }