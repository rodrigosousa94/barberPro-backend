import prismaClient from "../../prisma";

class DetailUserService {
    async execute(userId: string) {
        const userDetail = await prismaClient.user.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true,
                email: true,
                endereco: true,
                subscriptions: {
                    select: {
                        id: true,
                        priceId: true,
                        status: true,
                    }
                }
            }
        })

        return { userDetail }
    }
}

export { DetailUserService }