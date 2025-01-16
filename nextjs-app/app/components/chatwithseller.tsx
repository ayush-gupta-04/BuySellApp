'use client'

import { sendStatusCode } from "next/dist/server/api-utils"
import { useState } from "react"

export default function ChatWithSeller({seller} : {seller : string}){
    const[step,setStep] = useState<string | null>(null)
    function handelNextStep(){
        if(step == null){
            setStep('message');
        }else if(step == 'message'){
            setStep(null)
        }
    }
    function closePopup(){
        if(step == 'message'){
            setStep(null);
        }
    }
    return(
        <div className="w-full min-h-32 bg-white rounded-lg shadow-lg border flex flex-row">
            <div className="h-full w-1 bg-[#ac70ff] rounded-l-lg"></div>
            <div className="w-full h-full flex flex-col px-2 py-2 gap-3">
                <div className="text-3xl font-semibold text-gray-700 self-center">Contact Seller</div>
                <div className="text-xl font-bold font-mono text-gray-800">Ayush Gupta </div>
                <button className="bg-[#ac70ff] py-3 rounded-lg hover:bg-[#9c55ff] text-white text-lg" 
                    onClick={() => {handelNextStep()}}
                >Message Seller</button>
            </div>
            <BackgroundSupporter hide = {step == null}></BackgroundSupporter>
            {step == 'message' && 
                <SendMessage seller = {seller}></SendMessage>
            }
        </div>
    )
}

function BackgroundSupporter({hide} : {hide : boolean}){
    return(
        <div className={`w-screen z-10 fixed top-1/2 left-1/2 transition-all -translate-x-1/2 -translate-y-1/2 h-full duration-300 ${hide?"opacity-0 pointer-events-none":"opacity-100 backdrop-brightness-50"}`} onClick={(e) => {e.stopPropagation()}}>  
        </div>
    )
} 


function SendMessage({seller} : {seller : string}){
    return (
        <div className="w-1/3 h-56 gap-2 bg-white top-1/2 left-1/2 transition-all -translate-x-1/2 -translate-y-1/2 z-30 fixed rounded-lg px-4 py-4 flex flex-col">
            <div className="self-center text-2xl font-semibold text-gray-700">Message {seller}</div>
            <textarea name="" id="" className="h-28  border hover:border-purple-500 rounded-lg outline:border-red-700 outline-1 outline-purple-500"></textarea>
        </div>
    )
}