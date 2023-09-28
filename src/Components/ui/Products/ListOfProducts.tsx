// import { ProductCard } from "./ProductCard";
// import { ArrayProducts } from "../../../types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../reducers/rootReducer";
import { getProducts } from "../../../api/products";
import { setProducts } from "../../../slices/products.slice";
import { Product } from "../../../types";
import { ProductCard } from "./ProductCard";

export const ListOfProducts = (): JSX.Element => {
  const dispath = useDispatch();
  useEffect(() => {
    async function fetchProducts() {
      await getProducts()
        .then((res) => dispath(setProducts(res.data?.products)))
        .catch((err) => console.log(err));
    }
    fetchProducts();
  }, []);

  const products = useSelector((state: IRootState) => state.products.products);
  console.log(products);

  return (
    <div className="w-full  h-auto items-center grid mobile:grid-cols-2 tablet:grid-cols-2 md:grid-cols-3 desktop:grid-cols-4 2xl:grid-cols-5">
      {products.map((product: Product, index) => {
        const { _id, description, image, price, title, user } = product;
        return (
          <div key={index} className="w-full flex justify-center ">
            <ProductCard
              user={user}
              _id={_id}
              description={description}
              image={image}
              price={price}
              title={title}
              key={_id}
            />
          </div>
        );
      })}
    </div>
  );
};
