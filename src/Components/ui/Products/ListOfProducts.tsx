import { ProductCard } from "./ProductCard";
// import { ArrayProducts } from "../../../types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../reducers/rootReducer";



export const ListOfProducts = (): JSX.Element => {
    const products = useSelector((state: IRootState) => state.products.products)
    
    useEffect(() => {

    },[products])
  return (
    <div className="w-full">
      {/* {products.map((product) => { */}
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

      {/* // })} */}
    </div>
  );
};
