import { useContext, useEffect, useState } from "react";
import UseAxiosPublic from "./Hooks/UasAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const ManageServices = () => {
    const {userFinal} = useContext(AuthContext)
    const [manageData,setManageData] = useState()
    const axiosPublic = UseAxiosPublic()
    useEffect(()=>{
        axiosPublic.get(`/addServices?email=${userFinal?.email}`)
        .then(res=>{
            setManageData(res.data)
        })
    },[])

    const handleDelete = id =>{
        axiosPublic.delete(`/addServices/${id}`)
        .then(res=>{
            if(res.data?.deletedCount > 0){
                toast.success("You have successfully deleted this order", {
                    theme: "colored"
                  })
                
            }
            console.log(res.data)
        })
    }

    // const handleUpdate = id =>{
    //     axiosPublic.put(`/addServices/${id}`)
    //     .then(res=>{
    //         console.log(res.data)
    //     })
    // }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Service Name</th>
        <th>Update Button</th>
        <th>Delete Button</th>

      </tr>
    </thead>
    <tbody>
      {
        manageData?.map(single=>
            <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{single?.name}</div>
            </div>
          </div>
        </td>
        <td>
          {single?.email}
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{single?.serviceName}</td>
        <th>
         <Link to={`/update/${single?._id}`}> <button  className="btn btn-ghost btn-xs">Update</button> </Link>
        </th>
        <th>
          <button onClick={()=>handleDelete(single?._id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
            
            
            )
      }
      
     


    </tbody>
    
    
  </table>
</div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageServices;