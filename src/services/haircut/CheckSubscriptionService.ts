import prismaClient from "../../prisma";

interface CheckSubscriptionRequest {
    userId: string;
}

class CheckSubscriptionService {
    async execute({ userId }: CheckSubscriptionRequest) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: userId
            },
            select: {
                subscriptions: {
                    select: {
                        id: true,
                        status: true
                    }
                }
            }
        })
    
        return user;
    }
}

export { CheckSubscriptionService }