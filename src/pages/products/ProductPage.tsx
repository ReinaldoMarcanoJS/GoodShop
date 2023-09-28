import { useSelector } from "react-redux";
import { IRootState } from "../../reducers/rootReducer";
import { Navbar } from "../../Components/Navbar";
import { VscAdd } from "react-icons/vsc";
import { FiSkipBack } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const ProductPage = (): JSX.Element => {
  const product = useSelector((state: IRootState) => state.product.product);
  const navigate = useNavigate()
  const { _id, description, image, price, title, user } = product;
  console.log(_id, description, image, price, user, title);

  return (
    <>
      <Navbar />
      <div className="min-h-screen font-default mobile:pt-28 tablet:pt-32 desktop:pt-48 2xl:pt-48">
      <div className="flex w-full px-4 border-b">
            <span className="w-auto flex items-center" onClick={() => navigate(-1) }>
            <FiSkipBack/>
            </span>
            <div className="mobile:text-lg min-h-20 flex justify-center  w-full">
              <p className="mobile:font-semibold text-xl pr-4">{title}</p>
            </div>
          </div>
        <div className="w-full h-auto shadow-lg">
          <img
            src={`https://goodshopbackend.up.railway.app/uploads/${image}`}
            alt={`${title}`}
            className="mobile:h-auto  mobile:w-full tablet:w-64 tablet:h-64 md:w-60 md:h-60 desktop:w-64 desktop:h-64 2xl:w-72 2xl:h-72"
          />
        </div>
        <div className=" ">
          <div className="py-4 w-full px-4 border-b">
            <div className="mobile:text-lg min-h-20 justify-start items-start w-full">
              <p className="mobile:font-medium">{description}</p>
            </div>
          </div>
          <div className="py-4 w-full  border">
            <div className="mobile:text-lg min-h-20 items-start w-full flex justify-around">
              <p className="mobile:font-medium">Price: ${price} </p>
              <p className="mobile:font-medium">State of product: New </p>
            </div>
          </div>

          <div className=" w-full  border px-4 ">
            <div className="min-h-20 w-full flex justify-center   ">
              <button className="mobile:w-28 border mobile:my-4 font-default font-medium mobile:px-2 border-cyan-700 bg-slate-500/10  mobile:h-auto mobile:items-center mobile:flex shadow-xl rounded-md mobile:text-xl mobile"><span className="ml-2">Add to card</span> <VscAdd/></button>
              
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
