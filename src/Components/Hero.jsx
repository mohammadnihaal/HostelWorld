import React, {useEffect, useState} from 'react'
import myVideo from '../assets/bg1.mp4'
import {assets} from "../assets/assets.js";
import {HostelService} from "../services/Hostels.service.js";
import {useNavigate} from "react-router-dom";


const Hero = () => {
    const [cities, setCities] = useState([]);

    const [filters, setFilters] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        HostelService.getCities().then(res=>{
            if(res.success){
                setCities(res.data);
                console.log(res.data);
            }
        })
    }, []);
    return (
        <div className="main" >
            <div className="overlay"></div>
            <video src={myVideo} autoPlay muted loop></video>
            <div className="content">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center ">Meet your people.</h1>
                <h3 className="font-bold text-xl md:text-xl lg:text-xl text-center ">Choose where to stay and we'll show
                    you who with!</h3>
                <img className="hero-headline-arrow" src="https://sc.hwstatic.com/pwa/arrow.svg"
                     alt="Start searching arrow" loading="lazy" width="170" height="69"  data-v-3a6da149=""/>
                <div className="hotel-form">
                    <form className='bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

                        <div>
                            <div className='flex items-center gap-2'>
                                <img src={assets.calenderIcon} alt="" className="h-4" />
                                <label htmlFor="destinationInput">Destination</label>
                            </div>
                            <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                                   placeholder="Type here" onChange={(event)=>setFilters({...filters, city:event.target.value})} required />
                            <datalist id='destinations'>
                                {cities.map((city, index) => (<option key={index} value={city} />))}
                            </datalist>
                        </div>

                        <div>
                            <div className='flex items-center gap-2'>
                                <img src={assets.calenderIcon} alt="" className="h-4" />
                                <label htmlFor="checkIn">Check in</label>
                            </div>
                            <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                        </div>

                        <div>
                            <div className='flex items-center gap-2'>
                                <img src={assets.calenderIcon} alt="" className="h-4" />
                                <label htmlFor="checkOut">Check out</label>
                            </div>
                            <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                        </div>

                        <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                            <label htmlFor="guests">Guests</label>
                            <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
                        </div>

                        <button onClick={() =>navigate(`/hostels/${filters.city}`, {state: {filters}})} className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                            <img src={assets.searchIcon} alt="searchIcon" className="h-4" />
                            <span>Search</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Hero

