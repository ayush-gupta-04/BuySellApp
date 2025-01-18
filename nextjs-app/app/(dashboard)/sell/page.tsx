import NewItemSell from "@/app/components/newItemSell"
import SellingItemComponent from "@/app/components/sellitem"
import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/app/db";
import { map } from "zod";

type ItemToSell = {
    id : string,
    title : string,
    description : string,
    price : string,
    time : string,
    photo : string,
    Buyer : {
        buy_id : string,
        buyer_id : string,
        message : string,
        buyer_contact : string,
        buyer_name : string,
    }[]
    ,
    requestCount : number
}

async function getItemsToSell(){
    const session = await getServerSession(NEXT_AUTH);
    if(session.user){
        try {
            const items = await prisma.sell.findMany({
                where : {
                    seller_Id : session.user.id,
                },
                include : {
                    item : {
                        include : {
                            Buy : {
                                where : {
                                    status : 'pending'
                                },
                                include : {
                                    Buyer : true,
                                },
                            }
                        }
                        
                    }
                }
            })
            const mappedItems = items.map((item) => {
                return {
                    id : item.item.id,
                    title : item.item.title,
                    description : item.item.description,
                    price : item.item.price,
                    time : item.item.created.toDateString(),
                    photo : item.item.photo[0],
                    Buyer : item.item.Buy.map((buyer) => {
                        return {
                            buy_id : buyer.id,
                            buyer_id : buyer.buyer_Id,
                            message : buyer.message,
                            buyer_contact : buyer.contact,
                            buyer_name : buyer.Buyer.firstname + " " + buyer.Buyer.lastname,
                        }
                    }),
                    requestCount : item.item.Buy.length
                }
            })
            return mappedItems;

        } catch (error) {
            return null
        }
    }else{
        return null;
    }
}

export default async function SellPage(){
    const itemsToSell = await getItemsToSell() as null | ItemToSell[];
    return(
        <div className=" flex flex-col gap-4 ">
            <div className="flex justify-between items-center">
                <div className="text-5xl mb-6 text-gray-700 font-medium">{itemsToSell?.length == 0?"No items...":"Items to sell"}</div>
                <NewItemSell></NewItemSell>
            </div>
            {itemsToSell && itemsToSell.map((itemToSell) => {
                return (
                    <SellingItemComponent item = {itemToSell}></SellingItemComponent>
                )
            })}
        </div>  
    )
}

