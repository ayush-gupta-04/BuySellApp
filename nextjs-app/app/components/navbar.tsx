'use client'
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react"
import SidebarItem from "./sidebar";
import BarsIcon from "../icons/bar";
import LeftArrow from "../icons/leftArrow";
import HomeIcon from "../icons/home";
import BuySell from "../icons/buysell";
import HistoryIcon from "../icons/history";
import SettingsIcon from "../icons/settings";

export default function Navbar(){
    const [show,setShow] = useState(true);
    return(
        <div className="h-full w-full flex flex-col">
            {!show && 
                <div className="px-6 py-8 cursor-pointer" onClick={() => {setShow(!show)}}><BarsIcon></BarsIcon></div>
            }
            {show && 
                <div className="cursor-pointer px-6 py-8" onClick={() => {setShow(!show)}}><LeftArrow></LeftArrow></div>
            }
            <div className={`w-full h-full px-6 py-8 flex flex-col ${show?"":"-translate-x-96 "} transition-all duration-500 `}>
                <div className="h-full flex flex-col justify-center">
                    <SidebarItem href="/dashboard" title="dashboard" icon = {HomeIcon()}></SidebarItem>
                    <SidebarItem href="/sell" title="sell" icon = {BuySell()}></SidebarItem>
                    <SidebarItem href="/buy" title="buy" icon = {BuySell()}></SidebarItem>
                    <SidebarItem href="/history" title="history" icon = {HistoryIcon()}></SidebarItem>
                    <SidebarItem href="/settings" title="settings" icon = {SettingsIcon()}></SidebarItem>
                </div>
            </div>
        </div>
    )
}










