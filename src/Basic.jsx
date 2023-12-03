import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import PopularServices from "./PopularServices";

const Basic = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <AboutUs></AboutUs>
            
        </div>
    );
};

export default Basic;