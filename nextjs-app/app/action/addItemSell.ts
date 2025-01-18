'use server'

import { newItemSchema } from "@/schema"
import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth"
import prisma from "../db"

export default async function newItemSellAction(data : {title : string, description : string, price : string, urls : string[]}){
    const format = newItemSchema.safeParse({title : data.title , description : data.description , price : data.price})
    const session = await getServerSession(NEXT_AUTH);
    console.log(session)
    if(format.success && data.urls.length > 0){
        if(session.user){
            try {
                console.log("hello")
                const result = await prisma.$transaction(async (tnx) => {
                    console.log('inside')
                    const item = await tnx.item.create({
                        data : {
                            title : data.title,
                            description : data.description,
                            price : Number(data.price),
                            photo : data.urls,
                            created : new Date()
                        }
                    })
                    const sell = await tnx.sell.create({
                        data : {
                            seller_Id : session.user.id,
                            itemId : item.id
                        }
                    })
                    return true;
                })
                if(result){
                    return {
                        success : true,
                        message : "Uploaded Successfully"
                    }
                }else{
                    return {
                        success : false,
                        message : "Something went wrong!"
                    }
                }
            } catch (error) {
                return {
                    success : false,
                    message : "Something went wrong!"
                }
            }
        }else{
            return {
                success : false,
                message : "Token error!"
            }
        }
    }
   else{
    return{
        success : false,
        message : "Invalid Input"
    }
   }
}