import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";

const Basic = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            
        </div>
    );
};

export default Basic;