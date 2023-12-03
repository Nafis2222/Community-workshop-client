import { useParams } from "react-router-dom";
import UseAxiosPublic from "./Hooks/UasAxiosPublic";
import { useContext, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const FixedBooking = () => {
    const {id } = useParams()
    const [booking , setBooking] = useState()
    const axiosPublic = UseAxiosPublic()
    const {userFinal} = useContext(AuthContext)

    useEffect(()=>{
        axiosPublic.get(`/ourServices/${id}`)
        .then(res=>{
            setBooking(res.data)
        })
    },[])

    const handlesubmit = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const serviceName = form.get('serviceName')

        const ProviderEmail = form.get('ProviderEmail')
        const image = form.get('image')
        const UserEmail = form.get('UserEmail')
        const price = form.get('price')
        const date = form.get('date')
        const instructions = form.get('instructions')
        console.log(serviceName,ProviderEmail,image,UserEmail,price,date,instructions)

        const Items = {
            serviceName,ProviderEmail,image,UserEmail,price,date,instructions
        }

        axiosPublic.post('/bookedServices', Items)        
        .then(res=>{
            console.log(res.data)
            if(res.data?.insertedId){
                Swal.fire(
                    'Good job!',
                  'You have successfully Purchase this service!',
                  'success')
            }
        })
    }
    console.log(booking)
    return (
        <div>
            <div className="bg-accent p-12 md:p-24">
            <h1 className="text-3xl font-extrabold">Form for Adding Services</h1>
        <form onSubmit={handlesubmit}>
        <div className="md:flex gap-3">
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Service Name</span>
            </label>
            <label className="input-group">
              <input type="text" required  defaultValue={booking?.serviceName} placeholder="Type your service name"  name="serviceName" className="input input-bordered w-full" />
            </label>
            </div>
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Service Provider email</span>
            </label>
            <label className="input-group">
              <input type="email" required defaultValue={booking?.serviceProvider?.providerEmail} name="ProviderEmail"  placeholder="Type provider email" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
       
        <div className="md:flex gap-3">
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Service Image</span>
            </label>
            <label className="input-group">
              <input type="url" required defaultValue={booking?.serviceImage} placeholder="Enter your img url" name="image" className="input input-bordered w-full" />
            
            </label>
            </div>
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">User Email</span>
            </label>
            <label className="input-group">
              <input type="email" required defaultValue={userFinal?.email} name="UserEmail" placeholder="Enter  price" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
        
        <div className="md:flex gap-3">
       
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <label className="input-group">
              <input type="number" required defaultValue={booking?.servicePrice} name="price"  placeholder="Enter your chosen service name" className="input input-bordered w-full" />
            </label>
            </div>
            <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Date</span>
            </label>
            <label className="input-group">
              <input type="date" required name="date"  placeholder="Enter your chosen service Area" className="input input-bordered w-full" />
            </label>
            </div>
        </div>
        <div className="flex gap-3">
        <div className=" w-full">
            
        <label className="label">
              <span className="label-text font-semibold">Special Instructions</span>
            </label>
            <label className="input-group">
              <input type="text" required name="instructions"  placeholder="Give us some instructions about it" className="input input-bordered py-5 w-full" />
            </label>            </div>
         
        </div>
        <div className="flex gap-3">
        <div className=" w-full">
            
            <button className="w-full btn btn-secondary mt-8">Purchase Now</button>
            </div>
         
        </div>
        </form>
        </div>
        </div>
    );
};

export default FixedBooking;