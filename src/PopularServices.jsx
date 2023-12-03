import { useEffect, useState } from "react";
import UseAxiosPublic from "./Hooks/UasAxiosPublic";
import { Link } from "react-router-dom";

const PopularServices = () => {
    const [service,setService] = useState()
    const axiosPublic = UseAxiosPublic()
    useEffect(()=>{
        axiosPublic.get('/ourServices')
        .then(res=>{
            setService(res.data)
        })
        console.log(service?.length)
    },[])

    
    return (
        <div>
            <h1 className="text-3xl text-center">Popular Services</h1>

            
           <div className="grid grid-cols-2 gap-4">
            {
                service?.map(just=>
                    <div key={just?._id}>
                    <div  className="card h-68 card-side bg-base-100 shadow-xl">
                    <figure><img className="h-60 w-full" src={just?.serviceImage} alt="Movie"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{just?.serviceName}</h2>
                      <p>{just?.serviceDescription}</p>
                      <h1>${just?.servicePrice}</h1>
                      <div>
                        <div className="flex align-middle gap-3">
                            <img className="w-16 h-16 rounded-full" src={just?.serviceProvider?.image} alt="" />
                            <h1 className="my-4">S.Provider : {just?.serviceProvider?.name}</h1>
                        </div>
                        <Link  className="btn btn-link" to={`/allServices/${just?._id}`}>View Details</Link>

                      </div>

                     </div>
                  </div>
                  </div>

                    )
            }
           </div>
    <div className="text-center my-4">
    <Link className="btn btn-info text-center" to="/allService">Show All Services</Link>
    </div>        
    </div>
    );
};

export default PopularServices;