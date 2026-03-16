import prismaClient from "../../prisma"

interface CountHaircuts {
    userId: string;
}

class CountHaircutsService {
    async execute({ userId }: CountHaircuts) {
        const haircutsCount = await prismaClient.haircut.count({
            where: {
                id: userId
            }
        })

        return haircutsCount
    }
}

export { CountHaircutsService }