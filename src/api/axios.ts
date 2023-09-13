import axios from "axios";

const instance = axios.create({
    baseURL: "https://goodshopbackend-production.up.railway.app/api",
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

export default instance