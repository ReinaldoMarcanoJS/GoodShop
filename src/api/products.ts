import axios from "./axios";
import { newProduct } from "../types";

export const getProducts = async () => {
  const response = await axios.get("/products", {
  });
  return response;
};
export const addProduct = async (product: newProduct) => {
    const formData = new FormData
    formData.append("image", product.image)
  const response = await axios.post("/products", {
    headers: {
      "Content-Type": "multipart/form-data",
      },
    data: product,
  });
  return response;
};
