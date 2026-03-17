import prismaClient from '../../prisma'

interface ScheduleRequest {
    customer: string;
    haircutId: string;
    userId: string;
}

class CreateScheduleService {
    async execute({customer, haircutId, userId}: ScheduleRequest){

        if(customer == "" || haircutId == ""){
            throw new Error("Send all data");
        }

        const schedule = await prismaClient.service.create({
            data: {
                customer,
                haircutId,
                userId
            }
        })

        return schedule;
    }
}

export { CreateScheduleService };
