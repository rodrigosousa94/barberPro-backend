import prismaClient from '../../prisma';

interface ListScheduleRequest {
    userId: string;
}

class ListScheduleService {
    async execute({userId}: ListScheduleRequest){
        const list = await prismaClient.service.findMany({
            where: {
                userId
            },
            select: {
                id: true,
                customer: true,
                haircut: true
            }
        })
        return list;
    }
}

export { ListScheduleService };