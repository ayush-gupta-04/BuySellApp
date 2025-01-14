import AppBar from "../components/appbar";
import Navbar from "../components/navbar";

export default function Layout({children} : {children : React.ReactNode}){
    return (
        <div className="h-full flex flex-col">
            <AppBar></AppBar>
            <div className="grid grid-cols-5 h-full">
                <div className="col-span-1">
                    <Navbar></Navbar>
                </div>
                <div className="col-span-3 border-l"> {children}</div>
            </div>
        </div>
    )
}

