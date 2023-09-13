import axios from "axios";

const instance = axios.create({
    baseURL: "https://goodshopbackend-production.up.railway.app/api",
})

export default instance