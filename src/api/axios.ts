import axios from "axios";

const instance = axios.create({
  baseURL: "https://goodshopbackend.up.railway.app/api",
  // baseURL: "http://localhost:3001/api",
  
  
});

export default instance;
