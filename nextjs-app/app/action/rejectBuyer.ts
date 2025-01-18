'use server'
import prisma from "../db"

export default async function rejectBuyerFromBuying(buy_id : string){
    try {
        const buy = await prisma.buy.update({
            where : {
                id : buy_id
            },
            data : {
                status : "rejected"
            }
        })
        if(buy){
            return {
                success : true,
                message : "Removed buyer"
            }
        }else{
            return {
                success : false,
                message : "Invalid User"
            }
        }
    } catch (error) {
        return {
            success : false,
            message : "Something went down!"
        }
    }

}