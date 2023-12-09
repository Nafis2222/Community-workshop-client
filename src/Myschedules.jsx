import { useContext, useEffect, useState } from "react";
import UseAxiosPublic from "./Hooks/UasAxiosPublic";
import Swal from "sweetalert2";
import { list } from "postcss";
import { AuthContext } from "./AuthProvider";

const Myschedules = () => {
    const {userFinal} = useContext(AuthContext)

    const [last,setLast] = useState()
    const axiosPublic = UseAxiosPublic()
    const handleClick = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const status = form.get('status')
        console.log(status)
    }

    useEffect(()=>{
        axiosPublic.get(`/bookedServices?email=${userFinal?.email}`)
        .then(res=>{
            setLast(res.data)
        })
    },[])
    console.log(last)
   
    return (
        <div>
         <div className="overflow-x my-10-auto">
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
        last?.map((one,tabIndex)=>(
            <tr key={one?._id}>
        <th>{tabIndex+1}</th>
        <td>{one?.serviceName}</td>
        <td>{one?.ProviderEmail}</td>
        <td>
        <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" defaultValue="check"  className="btn m-1">Check</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
  <form action="">
  <li  onClick={handleClick}><input name="status"  type="text" defaultValue="pending" /></li>
    <li name="status" ><a>progress</a></li>
    <li name="status"  onSubmit={handleClick}><a>progress</a></li>
  </form>
  </ul>
</div>
        </td>
      </tr> 
        ))
    }     
     
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Myschedules;