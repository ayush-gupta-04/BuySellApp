'use server'
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";
import prisma from "../db";

export async function deleteRequestAction(buy_id : string){
    const session = await getServerSession(NEXT_AUTH);
    if(!session.user){
        return {
            success : false,
            message :'Unauthorised user!'
        }
    }
    try {
        const update = await prisma.buy.update({
            where : {
                id : buy_id
            },
            data : {
                status : "cancelled"
            }
        })
        return {
            success : true,
            message : "Deleted Successfully!"
        }
    } catch (error) {
        return{
            success : false,
            message : "Something went down!"
        }
    }

}

export async function deleteRequestPermanetlyAction(buy_id : string){
    const session = await getServerSession(NEXT_AUTH);
    if(!session.user){
        return {
            success : false,
            message :'Unauthorised user!'
        }
    }
    try {
        await prisma.buy.delete({
            where : {
                id : buy_id
            }
        })
        return {
            success : true,
            message : "Deleted Successfully!"
        }
    } catch (error) {
        return{
            success : false,
            message : "Something went down!"
        }
    }
}