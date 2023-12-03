import { useEffect, useState } from "react";
import UseAxiosPublic from "./Hooks/UasAxiosPublic";
import Swal from "sweetalert2";
import { list } from "postcss";

const Myschedules = () => {
    const [last,setLast] = useState()
    const axiosPublic = UseAxiosPublic()

    useEffect(()=>{
        axiosPublic.get('/bookedServices')
        .then(res=>{
            setLast(res.data)
        })
    },[])
    console.log(last)
   
    return (
        <div>
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Service Name</th>
        <th>Provider Email</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    {
        last?.map((one,tabIndex)=>{
            <tr key={one?._id}>
        <th>{tabIndex}+ 1</th>
        <td>{one?.serviceName}</td>
        <td>{one?.ProviderEmail}</td>
        <td><button>pending</button></td>
      </tr> 
        })
    }     
     
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Myschedules;