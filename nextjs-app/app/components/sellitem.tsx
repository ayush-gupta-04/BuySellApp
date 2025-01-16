'use client'
import { useState } from "react";
import DeleteIcon from "../icons/delete";
import DownChevelron from "../icons/downChevelron";
import UpChevron from "../icons/upChevron";
import EditIcon from "../icons/edit";

export default function SellingItemComponent(){
    const[show,setShow] = useState(false)
    return(
        <div className="flex flex-col shadow-lg bg-white rounded-lg">
            <div className="w-full h-48 grid grid-cols-12 gap-1  rounded-t-lg border-b">
                <div className="col-span-3 mt-2 ml-2 flex flex-col justify-between ">
                    <div className="h-full bg-blue-200 overflow-hidden"><img src="/sample.webp" alt="" className="hover:scale-110 transition-all duration-300"/></div>
                    <div className="flex gap-2  px-2 py-1">Requests Count : <div className="text-green-600 font-semibold">4</div></div>
                </div>
                <div className="col-span-7  my-2 flex flex-col gap-1">
                    <div className="font-semibold text-3xl  px-2 text-gray-700 flex justify-between">
                        <div>Title</div>
                        <div className="hover:text-blue-500 cursor-pointer"><EditIcon></EditIcon></div>
                    </div>
                    <div className="h-full  px-2 py-1 text-gray-500">This is the bike that i have boughtfdsdd sdsa dsas  dgds dsdjsjda sdahsdjsa sadk.</div>
                    <div className="flex flex-row justify-between px-2 text-gray-700">
                        <div className="">Posted : 3 days ago</div>
                        <div className="font-semibold text-lg">Rs. 10,000</div>
                    </div>
                </div>
                <div className="col-span-2 text-center w-full h-full flex flex-col justify-between  items-center px-2 py-2 hover:bg-red-200 rounded-md transition-all duration-500 active:scale-95 cursor-pointer active:bg-red-300">
                    <div></div>
                    <DeleteIcon></DeleteIcon>
                    <div>Remove Item</div>
                </div>
            </div>
            <div className={` w-full overflow-hidden rounded-b-lg ${show?"h-fit":"h-0"} transition-all duration-500`}>
                <Request></Request>
                <Request></Request>
                <Request></Request>
            </div>
            <div className="bg-purple-100 flex justify-between items-center hover:bg-purple-200 cursor-pointer" onClick={() => {setShow(!show)}}>
                <div className="flex justify-center items-center gap-3">
                    <div className={`h-8 w-1 bg-purple-600 ${show?"":"rounded-bl-lg"} transition-all duration-700`}></div>
                    <div>{show?"Close Panel":"View Requests"}</div>
                </div>
                <div className="px-3">{show?<UpChevron></UpChevron>:<DownChevelron></DownChevelron>}</div>
            </div>
        </div>
    )
}

function Request(){
    return(
        <div className="min-h-20 w-full border-b grid grid-cols-3">
            <div className="col-span-2 flex flex-col px-4 py-2">
                <div className="text-xl font-semibold">Buyer : Sunny Kumar</div>
                <div className="text-gray-600">some message </div>
                <div className="self-end text-gray-500 font-medium">5 mins ago</div>
            </div>
            <div className="grid-cols-1  flex justify-center items-center gap-8">
                <button className="bg-green-500 text-white px-8 py-2 rounded-lg active:scale-95 transition-all duration-150 hover:bg-green-600">Sell Item</button>
                <button className="bg-red-500 text-white px-8 py-2 rounded-lg active:scale-95 transition-all duration-150 hover:bg-red-600">Reject</button>
            </div>
        </div>
    )
}