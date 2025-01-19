'use server'

import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth"
import prisma from "../db";

export async function confirmSellAction(data : {buyer_id : string,item_id : string}){
    const session = await getServerSession(NEXT_AUTH);
    if(session.user){
        const seller_id = session.user.id;
        const transaction = await prisma.$transaction(async (tnx) => {
            const order_placed = await tnx.trade.create({
                data : {
                    seller_id : seller_id,
                    buyer_id : data.buyer_id,
                    item_id : data.item_id,
                    time : new Date()
                }
            })
            const update = await tnx.item.update({
                where : {
                    id : data.item_id
                },
                data : {
                    sold : true
                }
            })
            const update_other = await tnx.buy.updateMany({
                where : {
                    item_id : data.item_id,
                    NOT : {
                        buyer_Id : data.buyer_id
                    }
                },
                data : {
                    status : "failed"
                }
            })
            const update_buyer = await tnx.buy.updateMany({
                where : {
                    item_id : data.item_id,
                    buyer_Id : data.buyer_id
                },
                data : {
                    status : "bought"
                }
            })
            return true
        })
        if(transaction){
            return {
                success : true,
                message : "Sold!"
            }
        }
    }else{
        return {
            success : false,
            message : "Unauthorised user!"
        }
    }
    
}