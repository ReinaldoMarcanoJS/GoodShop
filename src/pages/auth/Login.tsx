import { useFormik, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { SigninSchema } from "../../schemas/auth.schemas";
import { Box } from "@mui/material";
import { InputForm } from "../../Components/ui";
import toast, { Toaster } from "react-hot-toast";
import { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { apiLogin } from "../../api/auth";
import { setUser } from "../../slices/auth.slice";
import { setIsAuth, setLoadingRequest } from "../../slices/ui.slice";
import { IRootState } from "../../reducers/rootReducer";
import { FiSkipBack } from "react-icons/fi";
interface Values {
  email: string;
  password: string;
}

export const Login = (): JSX.Element => {
  const loading = useSelector((state: IRootState) => state.ui.loadingRequest);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik<Values>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SigninSchema,
    onSubmit: async (
      values: Values,
      { setSubmitting }: FormikHelpers<Values>
    ) => {
      dispatch(setLoadingRequest(true));
      const userparam = {
        email: values.email,
        password: values.password,
      };
      try {
        const response = apiLogin(userparam);
        const user = (await response).data;
        dispatch(setUser(user));
        dispatch(setIsAuth(true));
        toast.success("Redirecting");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        let message;
        console.log(error);

        if (error instanceof AxiosError) {
          message = error.response?.data;
        } else message = String(error);
        console.log(message);
        toast.error(message);
      }
      dispatch(setLoadingRequest(false));
      setSubmitting(false);
    },
  });

  return (
    <div className="mobile:h-screen mobile:flex justify-center mobile:flex-col bg-gradient-to-r from-cyan-900 via-orange-950 to-cyan-900 stop font-default mobile:justify-center mobile:items-center mobile:px-4 tablet: ">
      <Toaster />

      <div className="bg-transparent mobile:w-full mobile:h-auto mobile:flex flex-col mobile:rounded-md mobile:bg-white tablet:w-11/12 md:w-3/4 desktop:w-3/5 desktop:text-xl 2xl:text-3xl 2xl:w-10/12">
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
              <h3 className="mobile:font-semibold mobile:text-4xl tablet:text-ellipsis desktop:text-5xl 2xl:text-7xl 2xl:my-2">
                Login
              </h3>
            </div>

            <label htmlFor="email">Email</label>
            <InputForm
              id="email"
              name="email"
              placeholder="********"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <div className="mobile:relative">
              {Boolean(formik.errors.email) && (
                <span className="mobile:text-redError absolute bottom-4 mobile:left-3/4 tablet:bottom-6 desktop:bottom-8 2xl:bottom-12">
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
                <span className="mobile:text-redError absolute bottom-4 mobile:left-3/4 tablet:bottom-6 desktop:bottom-8 2xl:bottom-12">
                  {formik.errors.password}
                </span>
              )}
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="mobile:w-20 items-center mobile:rounded-md mobile:mb-2 mobile:mt-2 mobile:border desktop:w-24 desktop:py-1 2xl:py-4 2xl:rounded-xl mobile:bg-cyan-700/20  mobile:border-cyan-700 outline-none tablet:mb-4 desktop:mb-6 2xl:mb-8  2xl:w-36 "
                disabled={loading}>
                Login
              </button>
            </div>
            <p className="flex justify-between px-6 gap-x-2 desktop:my-3 2xl:my-4">
              Don't have an account?{" "}
              <Link to={"/register"} className="text-sky-500">
                Sign up
              </Link>
            </p>

            <div />
          </div>
        </Box>
      </div>
    </div>
  );
};
