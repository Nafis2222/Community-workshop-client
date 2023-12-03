import { NavLink, useParams } from "react-router-dom";
import UseAxiosPublic, { axiosPublic } from "./Hooks/UasAxiosPublic";
import { useState } from "react";

const SingleService = () => {
    const {id} = useParams()
    const axiosPublic = UseAxiosPublic()
    const [single,setSingle] = useState()
    console.log(id)
    axiosPublic.get(`/ourServices/${id}`)
    .then(res=>{
        setSingle(res.data)
    })
    
    return (
        <div>
            <div>
                <h1 className="text-3xl  text-center">Service Provider Information</h1>
                <div className="flex my-5 gap-8 justify-center">
                    <div>
                        <img src={single?.serviceProvider?.image} alt="" />
                    </div>
                    <div className="my-auto">
                        <h1 className="text-xl ">Service Provider Name : <span className="text-lime-600">{single?.serviceProvider?.name}</span> </h1>
                        <h1 className="text-xl ">ServiceArea : <span className="text-lime-600">{single?.serviceArea}</span></h1>
                        <h1 className="text-xl ">providerEmail : <span className="text-lime-600">{single?.serviceProvider?.providerEmail}</span></h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-3xl text-center">Single Service Section</h1>
                <div className="flex gap-9 my-12 justify-center">
                    <div>
                        <img className="h-80 w-[500px]" src={single?.serviceImage} alt="" />
                    </div>
                    <div className="my-auto">
                        <h1 className="font-bold">{single?.serviceName}</h1>
                       <div>
                       <img className="w-32 h-32 rounded-bl-full" src={single?.serviceProvider?.image} alt="" />
                        <h1 className="text-orange-600 font-semibold">{single?.serviceProvider?.name}</h1>
                       </div>
                        <h1 className="text-gray-500">{single?.serviceDescription}</h1>
                        <h1 className="text-blue-600 mb-4 font-semibold">{single?.servicePrice} $</h1>
                        <NavLink single={single} to={`/fixedBooking/${single?._id}`} className="btn btn-info">Book Now</NavLink>

                    </div>
                   
                </div>
            </div>
            
        </div>
    );
};

export default SingleService;