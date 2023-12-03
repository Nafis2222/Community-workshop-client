import { FaSquareCheck } from "react-icons/fa6";
const AboutUs = () => {
    return (
        <div>
            <div>
                <div>

                </div>
                <div>
                    <h1 className="text-green-600 text-2xl text-semibold">About Us</h1>
                    <h1 className="text-4xl border-b-4  text-bold">Repairs are our passion</h1>
                    <p className="border-4 w-8 border-green-700"></p>
                    <h1 className="text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</h1>
                    <div className="grid grid-cols-2">
                        <div>
                           <div className="flex gap-3">
                           <h1 className="mt-1"><FaSquareCheck /></h1>
                            <h1> Qualified Team</h1>
                           </div>
                           <div className="flex gap-3">
                           <h1 className="mt-1"><FaSquareCheck /></h1>
                            <h1> Affordable pricing</h1>
                           </div>
                           <div className="flex gap-3">
                           <h1 className="mt-1"><FaSquareCheck /></h1>
                            <h1> Quick service</h1>
                           </div>
                        </div>
                        <div>
                           <div className="flex gap-3">
                           <h1 className="mt-1"><FaSquareCheck /></h1>
                            <h1> Qualified Team</h1>
                           </div>
                           <div className="flex gap-3">
                           <h1 className="mt-1"><FaSquareCheck /></h1>
                            <h1> Affordable pricing</h1>
                           </div>
                           <div className="flex gap-3">
                           <h1 className="mt-1"><FaSquareCheck /></h1>
                            <h1> Quick service</h1>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AboutUs;