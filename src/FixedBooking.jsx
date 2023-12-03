import { useParams } from "react-router-dom";

const FixedBooking = () => {
    const {id } = useParams()
    console.log(id)
    return (
        <div>
            <h1>Sonar BAna</h1>
        </div>
    );
};

export default FixedBooking;