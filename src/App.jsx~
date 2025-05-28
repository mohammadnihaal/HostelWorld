import React from 'react'
import NavBar from "./Components/NavBar.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home.jsx";
import {HostelService} from "./services/Hostels.service.js";
import Hostels from "./pages/Hostels.jsx";
import Hostel from "./pages/hostel.jsx";

const App = () => {

    const isOwnerPath = useLocation().pathname.includes("owner")



    return (
        <div>
            { !isOwnerPath && <NavBar/>}
            <div className="min-h-[70vh]">
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/hostels/:city' element={<Hostels />} />
                    <Route path="/hostel/:id" element={<Hostel />} />
                </Routes>
            </div>
        </div>
    )
}

export default App