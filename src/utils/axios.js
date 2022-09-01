import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://cryptic-forest-09082.herokuapp.com",
});

export default axiosInstance;
