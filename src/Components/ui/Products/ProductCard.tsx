// import carro from "../../../assets/carros_CATEGORIAS.svg";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProduct } from "../../../slices/oneProduct";
type product = {
  title: string;
  price: string;
  description: string;
  image: string;
  _id: string;
  user: string;
};
type propsTextAnimate = {
  title: string;
  price: string;
};

export const ProductCard = ({
  image,
  title,
  price,
  _id,
  description,
}: product): JSX.Element => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const handleNavigate = () => {
    async function fetchProduct() {
      dispath(
        setProduct({
          title,
          _id,
          price,
          image,
          description,
        })
      );
      navigate(`/products/${_id}`);
    }
    fetchProduct();
  };
  console.log(image);
  return (
    <div>
      <div className="mb-2 mobile:w-40 mobile:h-40 tablet:w-64 tablet:h-64 md:w-60 md:h-60 desktop:w-64 desktop:h-64 2xl:w-72 2xl:h-72 flex flex-nowrap justify-center">
        <div className="mobile:w-full mobile:mt-2 bg-slate-500/10 items-center duration-100  mobile:items-center mobile:flex mobile:flex-row mobile:justify-center shadow-xl rounded-md">
          <div className="mobile flex justify-center w-full h-auto">
            <img
              src={`https://goodshopbackend.up.railway.app/uploads/${image}`}
              alt={`${title}`}
              className="mobile:h-40 mobile:w-40 tablet:w-64 tablet:h-64 md:w-60 md:h-60 desktop:w-64 desktop:h-64 2xl:w-72 2xl:h-72"
              onClick={() => handleNavigate()}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-2 mb-4 mobile:font-default mobile:text-xs text-center mobile:font-normal tablet:text-base  ">
        <AnimateText title={title} price={price} />
      </div>
    </div>
  );
};

export const AnimateText = ({
  title,
  price,
}: propsTextAnimate): JSX.Element => {
  // const array = title.split(" " , -1)
  // console.log(array);

  return (
    <div className="w-36">
      <div className="text text-start tablet:text-sm md:text-base desktop:text-lg 2xl:text-xl">
        {title}
      </div>
      <div className="w-36 text-start tablet:text-sm md:text-base desktop:text-lg 2xl:text-xl">
        price: ${price}
      </div>
    </div>
  );
};
