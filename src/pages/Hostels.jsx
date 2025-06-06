import React, {useEffect, useState} from 'react'
import {assets} from "../assets/assets.js";
import {useNavigate} from "react-router-dom";
import StarRating from "../Components/StarRating.jsx";
import axios from "axios";
import {useParams} from "react-router-dom";


const Hostels = (props) => {
    const navigate = useNavigate()

    const {city} = useParams();

    const [openFliters, setOpenFliters] = useState(false)

    const [roomsDummyData,setRoomsDummyData] = useState([{name:'',city: '',description: '',price: '',image: '',totalRating: '',usersRated: ''}]);

    useEffect(() => {
        const fetchHostelsDetailsByLocation = async () => {
            const response = await axios.get("https://hostelworld.onrender.com/hostel/",{
                params: {
                    city: city
                }
            } );
            console.log(city);
            setRoomsDummyData(Array.isArray(response.data.data) ? response.data.data : []);
        };
        fetchHostelsDetailsByLocation();

    }, []);


    console.log(roomsDummyData)

    return (
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
            <div>
                <div className="flex flex-col items-start text-left">
                    <h1 className="font-playfair text-4xl md:text-[40px]">Hostel Rooms</h1>
                </div>

                {roomsDummyData.map((room, index)=>(
                    <div key={index} className="flex flex-col md:flex-row item-start py-10 gap-6 border-b border-gray-300 last:pb-30 lastborder-0">
                        <img onClick={()=> {navigate(`/hostel/${room._id}`); scrollTo(0,0)}}
                            src={room.image} alt="hotel-img" title="View Room Details" className="max-h-150 md:w-1/2
                        rounded-xl shadow-lg object-cover cursor-pointer" />
                        <div className="md:w-1/2 flex flex-col gap-2">
                            <p className="text-gray-500">{room.city}</p>
                            <p onClick={()=> {navigate(`/hostel/${room._id}`); scrollTo(0,0)}}
                                className="text-gray-800 text-3xl font-playfair cursor-pointer">{room.name}</p>
                            <div className="flex items-center">
                                <StarRating />
                                <p className="ml-2">200+ reviews</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                                <img src={assets.locationIcon} alt="location-icon"/>
                                <span>{room.address}</span>
                            </div>
                                
                            {/* Room Price */}
                            <p className="text-xl font-medium text-gray-700">₹{room.price} /night</p>
                            <p className="text-xl font-medium text-gray-700">{room.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Hostels
