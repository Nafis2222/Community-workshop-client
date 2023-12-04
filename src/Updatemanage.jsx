import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAxiosPublic, { axiosPublic } from "./Hooks/UasAxiosPublic";
import { ToastContainer, toast } from "react-toastify";

const Updatemanage = () => {
    const {id} = useParams()
    const [fix,setFix] = useState()
    console.log(id)
    const axiosPublic = UseAxiosPublic()

    useEffect(()=>{
        axiosPublic.get(`/addServices/${id}`)
        .then(res=>{
            setFix(res.data)
        })
    },[])
    console.log(fix?.name)

    const handlesubmit = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const image = form.get('image')
        const price = form.get('price')
        const serviceName = form.get('serviceName')
        const serviceArea = form.get('serviceArea')
        const description = form.get('description')
        console.log(name,email,price,image,serviceName,serviceArea,description)

        const Items = {
            name,email,image,price,serviceName, serviceArea, description
        }


        axiosPublic.put(`/addServices/${id}`, Items)
        .then(res=>{
            console.log(res.data)
            if(res.data?.modifiedCount > 0){
                toast.success("You have successfully Updated Your Data", {
                    theme: "colored"
                  })
            }
            
        })
        
    }
    return (
        <div>
             <div className="bg-accent p-12 md:p-24">
            <h1 className="text-3xl font-extrabold">Form for Updating Services</h1>
        <form onSubmit={handlesubmit}>
        <div className="md:flex gap-3">
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <label className="input-group">
              <input type="text" defaultValue={fix?.name} required placeholder="Type your name"  name="name" className="input input-bordered w-full" />
            </label>
            </div>
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Your email</span>
            </label>
            <label className="input-group">
              <input type="email" defaultValue={fix?.email} required name="email"  placeholder="Type your email" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
       
        <div className="md:flex gap-3">
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Picture Url</span>
            </label>
            <label className="input-group">
              <input type="url" defaultValue={fix?.image} required placeholder="Enter your img url" name="image" className="input input-bordered w-full" />
            
            </label>
            </div>
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">price</span>
            </label>
            <label className="input-group">
              <input type="number" defaultValue={fix?.price} required name="price" placeholder="Enter  price" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
        
        <div className="md:flex gap-3">
       
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Service name</span>
            </label>
            <label className="input-group">
              <input type="text" defaultValue={fix?.serviceName} required name="serviceName"  placeholder="Enter your chosen service name" className="input input-bordered w-full" />
            </label>
            </div>
            <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Service Area</span>
            </label>
            <label className="input-group">
              <input type="text" defaultValue={fix?.serviceArea} required name="serviceArea"  placeholder="Enter your chosen service Area" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
        <div className="flex gap-3">
        <div className=" w-full">
            
        <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <label className="input-group">
              <input type="text" defaultValue={fix?.description} required name="description"  placeholder="Give us some details about it" className="input input-bordered py-5 w-full" />
            </label>            </div>
         
        </div>
        <div className="flex gap-3">
        <div className=" w-full">
            
            <button className="w-full btn btn-secondary mt-8">Update Now</button>
            </div>
         
        </div>
        </form>
        </div> 
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Updatemanage;