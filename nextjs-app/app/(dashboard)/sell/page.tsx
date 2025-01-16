import SellingItemComponent from "@/app/components/sellitem"

export default function SellPage(){
    return(
        <div className=" flex flex-col gap-4">
            <div className="text-5xl mb-6 text-gray-700 font-medium">Items to sell,</div>
            <SellingItemComponent></SellingItemComponent>
            <SellingItemComponent></SellingItemComponent>
            <SellingItemComponent></SellingItemComponent>
            <SellingItemComponent></SellingItemComponent>
            <SellingItemComponent></SellingItemComponent>
            <SellingItemComponent></SellingItemComponent>
            <SellingItemComponent></SellingItemComponent>
            <SellingItemComponent></SellingItemComponent>
        </div>  
    )
}



