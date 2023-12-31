import { Footer } from "../Components/Footer";
import { Navbar } from "..//Components/Navbar";
import { Loader } from "..//Components/ui";
import { ListOfProducts } from "../Components/ui/Products/ListOfProducts";
import { useNavigate } from "react-router-dom";

export const Dashboard = (): JSX.Element => {
  const navigate = useNavigate();
  const loading = false;
  return (
    <>
      <Navbar />
      <div
        className={
          loading
            ? "grid bg-#fff pl-5 mobile:pt-32 tablet:pt-32 desktop:pt-48 2xl:pt-48  "
            : "mobile:bg-#fff h-auto "
        }>
        {loading ? (
          <Loader />
        ) : (
          <div className="mobile: h-full">
            <main
              className={
                loading
                  ? "grid bg-#fff pl-5 mobile:pt-32 desktop:pt-48"
                  : "mobile:h-auto mobile:flex flex-col items-center bg-#fff mobile:pt-32 desktop:pt-48 transition-all"
              }>
              <div className="mobile:w-11/12 border mobile:mb-2 border-cyan-700 bg-slate-500/10 duration-100 mobile:h-10 mobile:active:text-2xl mobile:items-center mobile:flex mobile:justify-center shadow-xl rounded-md mobile:font-default mobile:text-xl text-center mobile:font-medium">
                <div className="mobile:w-auto ">
                  <button className="" onClick={() => navigate("/addproduct")}>
                    <p className="text-cyan-700  ">
                      Sell your products with us!
                    </p>
                  </button>
                </div>
              </div>

              <div className="w-full">
                <ListOfProducts />
              </div>
            </main>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};
