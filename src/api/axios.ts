import axios from "axios";

const instance = axios.create({
  baseURL: "https://goodshopbackend.up.railway.app/api",
  // baseURL: "http://localhost:3001/api",
  
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

export default instance;
