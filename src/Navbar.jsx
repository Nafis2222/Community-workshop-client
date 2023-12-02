import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const { userFinal,LogOut} = useContext(AuthContext)
    console.log(userFinal)
   


    const navlinks = <>
    <li><NavLink className="btn btn-ghost align-middle  btn-sm" to="/">Home</NavLink></li>
    <li><NavLink className="btn btn-ghost align-middle  btn-sm" to="/">Services</NavLink></li>
    </>

const handleClick = () =>{
    LogOut()
    .then(res =>{
        console.log(res.user)
    })
    .catch(error =>{
        console.log(error)
    })
  }
    return (
        <div>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-sm bg-amber-600 btn-ghost"><NavLink to="/">Dashboard</NavLink></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/addServices">Add services</Link></li>
            <li><Link to="/manageServices">Manage services</Link></li>
            <li><Link to="/">My-schedules</Link></li>

          </ul>
        </div>
       
      </ul>
    </div>
    <img className="w-44 h-20 rounded-full" src="https://i.ibb.co/7n0wV8P/download-4.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
  
       
      {
        userFinal ? <>
           {navlinks}
      
      <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn ml-2 btn-sm bg-amber-600 btn-ghost"><NavLink to="/">Dashboard</NavLink></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link to="/addServices">Add services</Link></li>
    <li><Link to="/manageServices">Manage services</Link></li>
    <li><Link to="/">My-schedules</Link></li>
  </ul>
  </div>
        </> :
        <>{navlinks}</>
      }
       
          </ul>

    </div>


  <div className="navbar-end">
    
  {
                userFinal ? <>
                <h1>{userFinal?.displayName}</h1>
                <p>{userFinal?.email}</p>
                <img className='w-12 h-12 mr-1 rounded-full' src={userFinal?.photoURL} alt="https://i.ibb.co/L97LMXw/own-pic.jpg" />
                <Link><button onClick={handleClick} className='btn'>Sign out</button></Link>
                </>
                
                : 
                <>
                <img className='w-12 mr-2 h-12' src="https://i.ibb.co/J50xnVF/user.png" alt="" />
                <Link to="/login"><button className='btn'>Login</button></Link>
                </>

            } 
  </div>
</div>
            
        </div>
    );
};

export default Navbar;