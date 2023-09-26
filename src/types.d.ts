export type User = {
    email: string;
    name: string;
    lastname: string;
    password: string;
  };
  
  export type LoginUser = Omit<User, "name", "lastname">;
  
  export type Product = {
    user: string
    title: string;
    description: string;
    price: string;
    image: string;
    _id: string
  } 
  
  export type newProduct = Omit<Product, "_id", "image">;


  export type ArrayProducts = {
    products: Product[]
  }