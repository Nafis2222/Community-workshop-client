import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: "https://community-pi-three.vercel.app//",

})
const UseAxiosPublic = () => {
    return axiosPublic
};

export default UseAxiosPublic;