import prismaClient from "../../prisma";

interface HaircutModel {
    id: string;
    name: string;
    price: number;
}

class UpdateHaircutService {
    async execute({ haircutId, name, price }){
        try{
            if(!name || !price){
                throw new Error("Name and price is required!");
            }
            
            const hairlreadyExists = await prismaClient.haircut.findFirst({
                where: {
                    id: haircutId
                }
            });

            if(!hairlreadyExists){
                throw new Error("haircut does not exists")
            }

            const haircutUpdated = await prismaClient.haircut.update({
                where: {
                    id: haircutId
                },
                data: {
                    name: name,
                    price: price
                },
                select: {
                    name: true,
                    price: true
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