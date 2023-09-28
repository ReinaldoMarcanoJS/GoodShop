import { useFormik, FormikHelpers } from "formik";
import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { InputForm } from "../../Components/ui";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { IRootState } from "../../reducers/rootReducer";
import { useState } from "react";
import { newProductSchema } from "../../schemas/product.schemas";
interface Values {
  title: string;
  description: string;
  price: string;
  user: string;
}

export const AddProduct = (): JSX.Element => {
  const [Image, setImage] = useState<File | string>("fileurl");
  const userId = useSelector((state: IRootState) => state.auth.User.id);
  const loading = useSelector((state: IRootState) => state.ui.loadingRequest);

  console.log(userId);

  const navigate = useNavigate();
  const formik = useFormik<Values>({
    initialValues: {
      title: "",
      description: "",
      price: "",
      user: "",
    },
    validationSchema: newProductSchema,
    onSubmit: async (
      values: Values,
      { setSubmitting }: FormikHelpers<Values>
    ) => {
      console.log(values);
      const { description, price, title } = values;
      if(Image === "fileurl"){
        return toast.error("incomplete image field")
      }
      let formData = new FormData();
      formData.append("image", Image);
      formData.append("title", title);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("user", userId);
      console.log(formData.getAll(""));

      try {
        await axios
          .post("/products", formData)
          .then((_res) => toast.success("New Product Added!"))
          .then((res) => console.log(res))
          .catch((_error) => toast.error("Something was wrong!"));
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (error) {
        return console.log(error);
      }
      setSubmitting(false);
    },
  });

  function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    } else {
      setImage(e.target.files[0]);
    }
  }
  return (
    <div className="mobile:h-screen mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:px-4  bg-gradient-to-r from-cyan-900 via-orange-950 to-cyan-900 stop">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            color: "hsl(0, 100%, 74%)",
            fontSize: "20px",
          },
        }}
      />
      <div className="mobile:w-full mobile:h-auto mobile:flex mobile:rounded-md mobile:bg-white  tablet:w-11/12 md:w-3/4 desktop:w-3/5 desktop:text-xl 2xl:text-3xl 2xl:w-10/12 ">
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          width="100%"
          display={"flex"}
          justifyContent={"center"}>
          <div className="mobile:flex mobile:flex-col mobile:py-5 font-medium font-default mobile:px-4 mobile:w-full 2xl:w-11/12">
            <div className="text-center">
              <h3 className="mobile:font-semibold text-4xl desktop:text-5xl 2xl:text-7xl 2xl:my-2">
                New
              </h3>
            </div>

            <label htmlFor="title">Title</label>
            <InputForm
              id="title"
              name="title"
              placeholder="Article"
              value={formik.values.title}
              onChange={formik.handleChange}
            />

            <div className="mobile:relative">
              {Boolean(formik.errors.title) && (
                <span className="mobile:text-redError absolute bottom-4 left-3/4 tablet:bottom-6 desktop:bottom-8 2xl:bottom-10  ">
                  {formik.errors.title}
                </span>
              )}
            </div>

            <label htmlFor="description">Description</label>
            <InputForm
              id="description"
              name="description"
              placeholder="Doe"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <div className="mobile:relative">
              {Boolean(formik.errors.description) && (
                <span className="mobile:text-redError absolute bottom-4 left-3/4 tablet:bottom-6 desktop:bottom-8 2xl:bottom-10  lef">
                  {formik.errors.description}
                </span>
              )}
            </div>

            <label htmlFor="price">price</label>
            <InputForm
              id="price"
              name="price"
              placeholder="john@acme.com"
              type="price"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            <div className="mobile:relative">
              {Boolean(formik.errors.price) && (
                <span className="mobile:text-redError absolute bottom-4 left-3/4 tablet:bottom-6 desktop:bottom-8 2xl:bottom-10  lef">
                  {formik.errors.price}
                </span>
              )}
            </div>

            <label htmlFor="Image">Image</label>
            <InputForm
              id="image"
              name="image"
              placeholder="********"
              type="file"
              accept="image/png,image/jpg,image/jpeg"
              onChange={(e) => handleChangeImage(e)}
            />

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="mobile:w-20 items-center mobile:rounded-md mobile:mb-2 mobile:mt-2 mobile:border desktop:w-24 desktop:py-1 2xl:py-4 2xl:rounded-xl mobile:bg-cyan-700/20  mobile:border-cyan-700 outline-none tablet:mb-4 desktop:mb-6 2xl:mb-8  2xl:w-36 "
                disabled={loading}>
                send
              </button>
            </div>

            <p className="flex gap-x-2 justify-between mobile:px-4 desktop:my-3 2xl:my-4 ">
              back to Dasboard?
              <Link to={"/dasboard"} className="text-sky-500">
                Dasboard
              </Link>
            </p>
            <div />
          </div>
        </Box>
      </div>
    </div>
  );
};
