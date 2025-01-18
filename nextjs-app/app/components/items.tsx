'use client'
import { useRouter } from "next/navigation";

type ItemType = {
    id : string,
    title : string,
    description : string,
    price : string,
    photos : string[],
    time : string,
}

export default function Items({title , description,price,photos,time,id} : ItemType){
    const router = useRouter();
    return(
        <div className="w-full h-80 bg-white shadow-lg rounded-lg grid grid-rows-3 cursor-pointer" onClick={() => {router.push(`/dashboard/${id}`)}}>
                <div className="row-span-2 rounded-t-lg mx-2 my-2 bg-red-200 overflow-hidden flex justify-center items-center"><img src={photos[0]} alt="" className="hover:scale-110 transition-all"/></div>
                <div className="flex">
                    <div className="h-full w-2 bg-[#ac70ff] rounded-bl-lg"></div>
                    <div className="flex flex-col px-2 pb-2 w-full">
                        <div className="flex justify-between"> 
                            <div  className="text-xl font-semibold text-gray-700">{title}</div>
                            <div className="text-lg font-bold text-gray-700">Rs. {price}</div>
                        </div>
                        <div className="h-full text-gray-500">{description.substring(0,88)}</div>
                        <div className="self-end text-gray-500">{time}</div>
                    </div>
                </div>
        </div>
    )
}