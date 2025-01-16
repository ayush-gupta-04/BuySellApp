import DeleteIcon from "@/app/icons/delete"

export default function Interested(){
    return(
        <div className="h-fit px-4 py-4 flex flex-col gap-6 ">
            <BuyInterestedCard></BuyInterestedCard>
            <BuyInterestedCard></BuyInterestedCard>
            <BuyInterestedCard></BuyInterestedCard>
            <BuyInterestedCard></BuyInterestedCard>
        </div>
    )
}

function BuyInterestedCard(){
    return (
        <div className="w-full h-48 grid grid-cols-12 gap-1 bg-white rounded-md shadow-lg">
            <div className="col-span-3 mt-2 ml-2 flex flex-col justify-between">
                <div className="h-full bg-blue-200 overflow-hidden"><img src="/sample.webp" alt="" className="hover:scale-110 transition-all duration-300"/></div>
                <div className="flex gap-2  px-2 py-1">Status : <div className="text-green-600 font-semibold">Pending</div></div>
            </div>
            <div className="col-span-7  my-2 flex flex-col gap-1">
                <div className="font-semibold text-lg  px-2 text-gray-700">Title</div>
                <div className="h-full  px-2 py-1 text-gray-700">This is the bike that i have boughtfdsdd sdsa dsas  dgds dsdjsjda sdahsdjsa sadk.</div>
                <div className="flex flex-row justify-between px-2 text-gray-700">
                    <div>Seller : Ayush Gupta</div>
                    <div className="font-semibold text-lg">10,000</div>
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

