import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import PopularServices from "./PopularServices";
import Contact from "./Contact";
import Bonus from "./Bonus";
import Review from "./Review";

const Basic = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <AboutUs></AboutUs>
            <Contact></Contact>
            <Bonus></Bonus>
            <Review></Review>
            
        </div>
    );
};

export default Basic;