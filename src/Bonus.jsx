import { NavLink } from "react-router-dom";

const Bonus = () => {
    return (
        <div>
            <div className="bg-green-500  text-white h-72 w-full relative">
                <div className="absolute mt-10 ml-4 md:ml-32">
                  <div className="flex md:gap-40 justify-between">
                    <div>
                    <h1 className="font-semibold text-xl">Shop</h1>
                    <h1 className="font-bold md:text-2xl" >We also semdll a wide range of <br /> Mobiles, Tablets & Tech <br /> Products</h1>
                    <h1 className="border-black w-2/12 border-b-4"></h1>
                    <NavLink to="/">                    <button className="btn mt-5 text-green-700 btn-active">View Shop</button>
                    </NavLink>
                  </div>
                  <div>
                    <img  src="https://i.ibb.co/m5PKzWH/download-21.jpg" alt="" />
                  </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Bonus;