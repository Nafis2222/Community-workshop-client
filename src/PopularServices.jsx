import { useEffect } from "react";
import UseAxiosPublic from "./Hooks/UasAxiosPublic";

const PopularServices = () => {
    const axiosPublic = UseAxiosPublic()
    useEffect(()=>{
        axiosPublic.get('/ourServices')
        .then(res=>{
            console.log(res.data)
        })
    },[])
    return (
        <div>
            <h1 className="text-3xl text-center">Popular Services</h1>
            
        </div>
    );
};

export default PopularServices;