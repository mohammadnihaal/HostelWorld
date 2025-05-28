import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {HostelService} from "../services/Hostels.service.js";
import {assets} from "../assets/assets.js";
import StarRating from "../Components/StarRating.jsx";

const Hostel = () => {
    const { id } = useParams();

    const [hostel, setHostel] = useState({});

    useEffect(() => {
            HostelService.getHostelData(id).then(res=>{
                if(res.success){
                    setHostel(res.data);
                    console.log(hostel);
                }
            })
        }, []);
    console.log(hostel);

    return (
        <div className="pt-28 px-6 md:px-16 lg:px-32 xl:px-40">
            <div className="flex flex-col lg:flex-row gap-10 bg-white shadow-xl rounded-2xl p-6 md:p-10">
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={hostel.image}
                        alt={hostel.name}
                        className="w-full h-full max-h-[450px] object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
                    <div>
                        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800">
                            {hostel.name}
                        </h1>
                        <p className="text-gray-600 text-lg mt-1">{hostel.city}</p>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed">{hostel.description}</p>

                    <div className="flex flex-col gap-2">
                        <div className="text-gray-500 text-sm flex items-center gap-1">
                            <img
                                src={assets.locationIcon}
                                alt="location"
                                className="h-4 w-4"
                            />
                            <span>{hostel.address || "No address provided"}</span>
                        </div>

                        <div className="text-lg font-semibold text-black">
                            ₹{hostel.price?.toLocaleString("en-IN")}{" "}
                            <span className="text-sm font-normal text-gray-600">/ night</span>
                        </div>
                    </div>

                    {/* Rating Info */}
                    <div className="flex items-center gap-2 mt-2">
                        <StarRating rating={hostel.totalRating || 0} />
                        <p className="text-sm text-gray-600">
                            {hostel.usersRated || 0} reviews
                        </p>
                    </div>

                    {/* Optional: Add a booking button */}
                    <button className="mt-4 bg-black text-white py-2 px-5 rounded-md w-fit hover:bg-gray-800 transition">
                        Book Now
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Hostel;
