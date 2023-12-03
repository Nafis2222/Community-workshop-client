import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import PopularServices from "./PopularServices";
import Contact from "./Contact";
import Bonus from "./Bonus";

const Basic = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <AboutUs></AboutUs>
            <Contact></Contact>
            <Bonus></Bonus>
            
        </div>
    );
};

export default Basic;