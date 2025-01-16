'use client'
import { useRouter } from "next/navigation";

export default function Items(){
    const router = useRouter();
    return(
        <div className="w-full h-80 bg-white shadow-lg rounded-lg grid grid-rows-3 cursor-pointer" onClick={() => {router.push(`/dashboard/123`)}}>
                <div className="row-span-2 rounded-t-lg mx-2 my-2 bg-red-200 overflow-hidden flex justify-center items-center"><img src="/sample.webp" alt="" className="hover:scale-110 transition-all"/></div>
                <div className="flex">
                    <div className="h-full w-2 bg-[#ac70ff] rounded-bl-lg"></div>
                    <div className="flex flex-col px-2 pb-2">
                        <div className="text-lg font-bold text-gray-700">Rs. 12,000</div>
                        <div className="h-full text-gray-500">hello sak sakda sdaks skda skas sdklas.sdkjadsakndas sdaiassad</div>
                        <div className="self-end text-gray-500">3 days ago</div>
                    </div>
                </div>
        </div>
    )
}