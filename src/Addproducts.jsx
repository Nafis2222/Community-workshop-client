import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import UseAxiosPublic from "./Hooks/UasAxiosPublic";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from "react-toastify";

const Addproducts = () => {
    const {userFinal} = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()
    console.log(userFinal)
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


        axiosPublic.post('/addServices', Items)
        .then(res=>{
            console.log(res.data)
            if(res.data?.insertedId){
                toast.success("You have successfully booked an order", {
                    theme: "colored"
                  })
            }
        })
    }
    return (
        <div>

              <div className="bg-accent p-12 md:p-24">
            <h1 className="text-3xl font-extrabold">Form for Adding Services</h1>
        <form onSubmit={handlesubmit}>
        <div className="md:flex gap-3">
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Type your name" defaultValue={userFinal?.displayname} name="name" className="input input-bordered w-full" />
            </label>
            </div>
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Your email</span>
            </label>
            <label className="input-group">
              <input type="email" name="email" defaultValue={userFinal?.email} placeholder="Type your email" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
       
        <div className="md:flex gap-3">
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Picture Url</span>
            </label>
            <label className="input-group">
              <input type="url" placeholder="Enter your img url" name="image" className="input input-bordered w-full" />
            
            </label>
            </div>
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">price</span>
            </label>
            <label className="input-group">
              <input type="number" name="price" placeholder="Enter  price" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
        
        <div className="md:flex gap-3">
       
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Service name</span>
            </label>
            <label className="input-group">
              <input type="text" name="serviceName"  placeholder="Enter your chosen service name" className="input input-bordered w-full" />
            </label>
            </div>
            <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Service Area</span>
            </label>
            <label className="input-group">
              <input type="text" name="serviceArea"  placeholder="Enter your chosen service Area" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
        <div className="flex gap-3">
        <div className=" w-full">
            
        <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <label className="input-group">
              <input type="text" name="description"  placeholder="Give us some details about it" className="input input-bordered py-5 w-full" />
            </label>            </div>
         
        </div>
        <div className="flex gap-3">
        <div className=" w-full">
            
            <button className="w-full btn btn-secondary mt-8">Book Now</button>
            </div>
         
        </div>
        </form>
        </div> 
        <ToastContainer></ToastContainer>

        </div>
    );
};

export default Addproducts;