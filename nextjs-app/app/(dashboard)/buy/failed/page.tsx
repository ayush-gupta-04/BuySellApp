export default function Cancelled(){
    return(
        <div className=" h-full px-4 py-4 flex flex-col gap-6">
            <BuyCancelledCard/>
            <BuyCancelledCard/>
            <BuyCancelledCard/>
        </div>
    )
}

function BuyCancelledCard(){
    return (
        <div className="w-full h-48 grid grid-cols-12 gap-1 bg-white rounded-md shadow-lg">
            <div className="col-span-3 mt-2 ml-2 flex flex-col justify-between ">
                <div className="h-full bg-blue-200 overflow-hidden"><img src="/sample.webp" alt="" className="hover:scale-110 transition-all duration-300"/></div>
                <div className="flex gap-2 px-2 py-1">Status : <div className="text-red-600 font-semibold">Cancelled</div></div>
            </div>
            <div className="col-span-7  my-2 flex flex-col gap-1">
                <div className="font-semibold text-lg  px-2 text-gray-400">Title</div>
                <div className="h-full  px-2 py-1 text-gray-400">This is the bike that i have boughtfdsdd sdsa dsas  dgds dsdjsjda sdahsdjsa sadk.</div>
                <div className="flex flex-row justify-between px-2 text-gray-400">
                    <div className="">Seller : Ayush Gupta</div>
                    <div className="font-semibold text-lg">10,000</div>
                </div>
            </div>
            <div className="col-span-2 text-center w-full h-full flex justify-center  items-center hover:bg-red-200 rounded-md transition-all duration-500 active:scale-95 cursor-pointer active:bg-red-300">
                <CrossIcon/>
            </div>
        </div>
    )
}

function CrossIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


    )
}