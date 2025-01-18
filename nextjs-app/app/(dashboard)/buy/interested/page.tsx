import DeleteIcon from "@/app/components/icons/delete"
import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/app/db";

type ItemToBuyType = {
    id : string
    title : string,
    description : string,
    price : string,
    photo : string,
    status : string
    seller_name : string
}

async function getPendingItems(){
    const session = await getServerSession(NEXT_AUTH);
    if(!session){
        return null;
    }
    const pendingItems = await prisma.buy.findMany({
        where : {
            buyer_Id : session.user.id,
            status : "pending"
        },
        select : {
            id : true,
            status : true,
            Item : {
                select : {
                    title : true,
                    description : true,
                    price : true,
                    photo : true,
                    Sell : {
                        select : {
                            seller : {
                                select : {
                                    firstname : true,
                                    lastname : true
                                }
                            }
                        }
                    }
                }
            },
        }
    })
    const mappedItems = pendingItems.map((items) => {
        return {
            id : items.id,
            title : items.Item.title,
            description : items.Item.description,
            price : items.Item.price.toString(),
            photo : items.Item.photo[0],
            status : items.status,
            seller_name : items.Item.Sell[0].seller.firstname + " " + items.Item.Sell[0].seller.lastname
        }
    })
    return mappedItems as ItemToBuyType[];
}
export default async function Interested(){
    const pendingItems = await getPendingItems() as ItemToBuyType[] | null;
    if(pendingItems?.length == 0){
        return (
            <div className="h-fit px-4 py-4 flex flex-col gap-6 ">
            No data found...
        </div>
        )
    }
    return(
        <div className="h-fit px-4 py-4 flex flex-col gap-6 ">
            {pendingItems && pendingItems.map((item) => {
                return (
                    <BuyInterestedCard item = {item}></BuyInterestedCard>
                )
            })}
        </div>
    )
}

function BuyInterestedCard({item} : {item : ItemToBuyType}){
    return (
        <div className="w-full min-h-48 grid grid-cols-12 gap-1 bg-white rounded-md shadow-lg">
            <div className="col-span-3 mt-2 ml-2 flex flex-col justify-between">
                <div className="h-full bg-blue-200 overflow-hidden rounded-md"><img src={item.photo} alt="" className="hover:scale-110 transition-all duration-300"/></div>
                <div className="flex gap-2  px-2 py-1">Status : <div className="text-green-600 font-semibold">{item.status}</div></div>
            </div>
            <div className="col-span-7  my-2 flex flex-col gap-1">
                <div className="font-semibold text-lg  px-2 text-gray-700">{item.title}</div>
                <div className="h-full  px-2 py-1 text-gray-700">{item.description}</div>
                <div className="flex flex-row justify-between px-2 text-gray-700">
                    <div>Seller : {item.seller_name}</div>
                    <div className="font-semibold text-lg">{item.price}</div>
                </div>
            </div>
            <div className="col-span-2 text-center w-full h-full flex flex-col justify-between  items-center px-2 py-2 hover:bg-red-200 rounded-md transition-all duration-500 active:scale-95 cursor-pointer active:bg-red-300">
                <div></div>
                <DeleteIcon></DeleteIcon>
                <div>Delete Request</div>
            </div>
        </div>
    )
}

