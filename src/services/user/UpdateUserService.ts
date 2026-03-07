import prismaClient from "../../prisma";

interface UpdateUser {
    id: string;
    name: string;
    endereco: string;
}

class UpdateUserService{
    async execute({id, name, endereco}: UpdateUser) {
        try{

            const userAlreadyExists = await prismaClient.user.findFirst({
                where: {
                    id: id
                }
            })

            if(!userAlreadyExists){
                throw new Error("User does not exists")
            }

            const userUpdated = await prismaClient.user.update({
                where: {
                    id: id
                },
                data: {
                    name: name,
                    endereco: endereco
                },
                select: {
                    name: true,
                    email: true,
                    endereco: true,
                }
            })

            return userUpdated;
        }catch(err){
            console.log(err);
            throw new Error("Error updating user");
        }
    }
}

export { UpdateUserService }