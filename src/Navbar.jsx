import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navlinks = <>
    <li><NavLink className="btn btn-ghost align-middle  btn-sm" to="/">Home</NavLink></li>
    <li><NavLink className="btn btn-ghost align-middle  btn-sm" to="/">Services</NavLink></li>
    

        
    
    </>
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
            <li><Link to="/">My services</Link></li>
            <li><Link to="/">Add services</Link></li>
            <li><Link to="/">My-schedules</Link></li>

          </ul>
        </div>
       
      </ul>
    </div>
    <img className="w-44 h-20 rounded-full" src="https://i.ibb.co/7n0wV8P/download-4.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
      
      <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn ml-2 btn-sm bg-amber-600 btn-ghost"><NavLink to="/">Dashboard</NavLink></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link to="/">My services</Link></li>
    <li><Link to="/">Add services</Link></li>
    <li><Link to="/">My-schedules</Link></li>
  </ul>
</div>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;