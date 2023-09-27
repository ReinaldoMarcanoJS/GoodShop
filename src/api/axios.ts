import axios from "axios";

const instance = axios.create({
  baseURL: "https://goodshopbackend.up.railway.app/api",
  // baseURL: "http://localhost:3001/api",
  
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
  },
});

export default instance;
