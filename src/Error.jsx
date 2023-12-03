
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mt-16">Sorry You Have enetred into a wrong page</h1>
            <Link to="/"><button className="btn btn-success">Go To Home</button></Link>
        </div>
    );
};

export default Error;