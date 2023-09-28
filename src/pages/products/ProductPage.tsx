import { useSelector } from "react-redux";
import { IRootState } from "../../reducers/rootReducer";
import { Navbar } from "../../Components/Navbar";
import { VscAdd } from "react-icons/vsc";
import { FiSkipBack } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const ProductPage = (): JSX.Element => {
  const product = useSelector((state: IRootState) => state.product.product);
  const navigate = useNavigate();
  const { _id, description, image, price, title, user } = product;
  console.log(_id, description, image, price, user, title);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-between font-default text-white-default mobile:pt-28 tablet:pt-32 desktop:pt-48 2xl:pt-48 bg-gradient-to-r from-cyan-900 via-orange-950 to-cyan-900 stop">
        
        <div className="mobile:h-auto flex-col  tablet:w-full shadow-lg font-default tablet:text-xl flex justify-center">
        <div className="flex w-full px-4 ">
          <span
            className=" mb-2 flex items-center "
            onClick={() => navigate(-1)}>
            <FiSkipBack color="white" size="1.3rem" />
            <p className="pr-1 text-white-default text-xl">Back</p>
          </span>
        </div>
          <div className="flex justify-center">
          <img
            src={`https://goodshopbackend.up.railway.app/uploads/${image}`}
            alt={`${title}`}
            className="mobile:min-h-40  mobile:w-full  tablet:w-3/4 tablet:min-h-72 md:w-60 md:h-60 desktop:w-64 desktop:h-64 2xl:w-72 2xl:h-72"
          />
          </div>
          <div className="py-4 w-full px-4 border-b">
            <div className="mobile:text-lg min-h-20 justify-start items-start w-full">
              <p className="mobile:font-medium overflow-hidden text-justify">
                {description} Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Cumque, culpa? Molestiae eum accusamus sunt ex
                cupiditate eaque placeat possimus recusandae perspiciatis
                repellat nisi, officiis harum praesentium, amet dolores maxime
                dolorem.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          
          <div className="py-4 w-full  border">
            <div className="mobile:text-lg min-h-20 items-start w-full flex justify-around">
              <p className="mobile:font-medium">Price: ${price} </p>
              <p className="mobile:font-medium">State of product: New </p>
            </div>
          </div>

          <div className=" w-full  border px-4 ">
            <div className="min-h-20 w-full flex justify-center   ">
              <button className="mobile:w-36 border mobile:my-4 font-default font-medium mobile:px-2 border-cyan-700 bg-slate-500/10  mobile:h-auto mobile:items-center mobile:flex shadow-xl rounded-md mobile:text-xl mobile">
                <span className="ml-2">Add to card</span>{" "}
                <VscAdd color="white" size="3rem" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
