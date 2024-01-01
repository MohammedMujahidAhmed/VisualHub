import Header from "./Components/Header.jsx";
import {Outlet} from "react-router-dom";
import './index.css';

export default function Layout(){
    return (
    <div className="bg-color p-2 min-h-screen">
        <div className="max-w-[1500px] m-auto">
            <div className="fixed top-0 z-10">
                <Header/>
            </div>
            <div className="mt-32">
                <Outlet/>
            </div>
        </div>
    </div>
    )
}