// import carro from "../../../assets/carros_CATEGORIAS.svg";

type product = {
  title: string,
  price: string,
  description: string,
  image: string,
  _id: string
}

export const ProductCard = ({description,image,price,title} : product): JSX.Element => {

  
  return (
    <div className="mb-10 w-full flex justify-center ">
      <div className="mobile:w-11/12 border mobile:mt-2 border-cyan-700 bg-slate-500/10 items-center duration-100 mobile:h-auto mobile:items-center mobile:flex mobile:flex-row mobile:justify-center shadow-xl rounded-md mobile:font-default mobile:text-xl text-center mobile:font-medium">
        <div className="mobile:w-auto ">
          <div className="mobile:w-auto">
            <div className="flex justify-between mx-2">
                <p>{title}</p>
                <p>Price: ${price}</p>
            </div>
            <div className="mobile flex justify-center w-full h-auto">
            <img src={`http://localhost:3001/uploads/${image}`} alt={`${title}`} className="w-full"/>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="mobile:text-base p-2">
                {description}
              </p>
              <button className="mobile:w-auto border mobile:my-2 mobile:px-2 border-cyan-700 bg-slate-500/10  mobile:h-auto mobile:items-center mobile:flex shadow-xl rounded-md mobile:text-xl mobile"><span>add to card</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
