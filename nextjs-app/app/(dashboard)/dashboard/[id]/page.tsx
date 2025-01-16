import ChatWithSeller from "@/app/components/chatwithseller";

export default async function ItemDetails({params} : { params: Promise<{ id: string }> } ){
    const id = (await params).id;
    return(
        <div className="h-fit flex flex-col  px-16 py-10 gap-6 w-full">
            <div className="w-full h-[450px] bg-white rounded-lg px-20 py-8 flex flex-row gap-4 overflow-auto overflow-y-hidden snap-x shadow-xl border" style={{scrollbarWidth : "thin"}}>
                <img src="/sample.webp" alt="" className="rounded-lg snap-always snap-center"/>
                <img src="/smaple2.jpg" alt="" className="rounded-lg snap-always snap-center"/>
                <img src="/sample.webp" alt="" className="rounded-lg snap-always snap-center"/>
                <img src="/sample4.png" alt="" className="rounded-lg snap-always snap-center"/>
            </div>  
            <div className="grid grid-cols-2 gap-4">
                <div className="w-full min-h-32 bg-white rounded-lg border flex flex-col px-4 py-2 shadow-lg justify-between gap-1">
                    <div className="text-3xl text-gray-700 font-medium">Rs. 12,000</div>
                    <div className="text-gray-500 h-full">Title</div>
                    <div className="self-end text-gray-500">Yesterday</div>
                </div>
                <ChatWithSeller seller = {"Ayush Gupta"}></ChatWithSeller>
            </div>

            <div className="w-full min-h-56 bg-white border shadow-lg rounded-lg px-4 py-2">
                <div className="text-lg font-medium">Description</div>
                <div>
                    kjbd kd skhdsksak  dsa kjsdksa kjdska khdkj asdkds sa
                </div>
            </div>
        </div>
    )
}

