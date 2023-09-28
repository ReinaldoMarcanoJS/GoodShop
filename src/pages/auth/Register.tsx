import { useFormik, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { InputForm } from "../../Components/ui";
import { apiRegister } from "../../api/auth";
import { SignupSchema } from "../../schemas/auth.schemas";
import toast, { Toaster } from "react-hot-toast";
import { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { IRootState } from "../../reducers/rootReducer";
import { FiSkipBack } from "react-icons/fi";
interface Values {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
}

export const Register = (): JSX.Element => {
  const loading = useSelector((state: IRootState) => state.ui.loadingRequest);

  const navigate = useNavigate();
  const formik = useFormik<Values>({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (
      values: Values,
      { setSubmitting }: FormikHelpers<Values>
    ) => {
      const userparam = {
        name: values.name,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
      };
      try {
        const response = apiRegister(userparam);
        toast.success((await response).data);

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (error) {
        let message;

        if (error instanceof AxiosError) {
          message = error.response?.data;
          console.log(error.message);
          toast.error(message);
        } else message = String(error);
        console.log(message);
      }
      setSubmitting(false);
    },
  });

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
      <div className="mobile:w-full font-default  flex-col mobile:h-auto mobile:flex mobile:rounded-md mobile:bg-white  tablet:w-11/12 md:w-3/4 desktop:w-3/5 desktop:text-xl 2xl:text-3xl 2xl:w-10/12 ">
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          width="100%"
          display={"flex"}
          justifyContent={"center"}>
          <div className="mobile:flex mobile:flex-col mobile:pb-5 font-medium font-default mobile:px-4 mobile:w-full 2xl:w-11/12">
            <span
              className="flex ml-2 cursor-pointer mt-2 items-center"
              onClick={() => navigate(-1)}>
              <FiSkipBack color="black" size="1.5rem" />
              <p className="pr-1 text-black text-2xl font-medium">Back</p>
            </span>
            <div className="text-center">
              <h3 className="mobile:font-semibold text-4xl desktop:text-5xl 2xl:text-7xl 2xl:my-2">
                Register
              </h3>
            </div>

            <label htmlFor="name">First Name</label>
            <InputForm
              id="name"
              name="name"
              placeholder="John"
              value={formik.values.name}
              onChange={formik.handleChange}
            />

            <div className="mobile:relative">
              {Boolean(formik.errors.name) && (
                <span className="mobile:text-redError absolute bottom-4 left-3/4 tablet:bottom-6 desktop:bottom-8 2xl:bottom-10  ">
                  {formik.errors.name}
                </span>
              )}
            </div>

            <label htmlFor="lastname">Last Name</label>
            <InputForm
              id="lastname"
              name="lastname"
              placeholder="Doe"
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
            <div className="mobile:relative">
              {Boolean(formik.errors.lastname) && (
                <span className="mobile:text-redError absolute bottom-4 left-3/4 tablet:bottom-6 desktop:bottom-8 2xl:bottom-10  lef">
                  {formik.errors.lastname}
                </span>
              )}
            </div>

            <label htmlFor="email">Email</label>
            <InputForm
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <div className="mobile:relative">
              {Boolean(formik.errors.email) && (
                <span className="mobile:text-redError absolute bottom-4 left-3/4 tablet:bottom-6 desktop:bottom-8 2xl:bottom-10  lef">
                  {formik.errors.email}
                </span>
              )}
            </div>

            <label htmlFor="password">Password</label>
            <InputForm
              id="password"
              name="password"
              placeholder="********"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <div className="mobile:relative">
              {Boolean(formik.errors.password) && (
                <span className="mobile:text-redError absolute bottom-4 left-3/4 tablet:bottom-6 desktop:bottom-8 2xl:bottom-10  lef">
                  {formik.errors.password}
                </span>
              )}
            </div>

            <label htmlFor="password">Confirm password</label>
            <InputForm
              id="confirmpassword"
              name="confirmpassword"
              placeholder="********"
              type="password"
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
            />
            <div className="mobile:relative">
              {Boolean(formik.errors.confirmpassword) && (
                <span className="mobile:text-redError absolute bottom-4 left-3/4 tablet:bottom-6 desktop:bottom-8 2xl:bottom-10  lef">
                  {formik.errors.confirmpassword}
                </span>
              )}
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="mobile:w-20 items-center mobile:rounded-md mobile:mb-2 mobile:mt-2 mobile:border desktop:w-24 desktop:py-1 2xl:py-4 2xl:rounded-xl mobile:bg-cyan-700/20  mobile:border-cyan-700 outline-none tablet:mb-4 desktop:mb-6 2xl:mb-8  2xl:w-36 "
                disabled={loading}>
                Register
              </button>
            </div>
            <p className="flex gap-x-2 justify-between mobile:px-4 desktop:my-3 2xl:my-4 ">
              already have an account?{" "}
              <Link to={"/login"} className="text-sky-500">
                Sign in
              </Link>
            </p>
            <div />
          </div>
        </Box>
      </div>
    </div>
  );
};
