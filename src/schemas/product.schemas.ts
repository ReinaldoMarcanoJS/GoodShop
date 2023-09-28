import * as Yup from "yup";

const newProductSchema = Yup.object().shape({
  title: Yup.string().min(2, "Short!").max(20, "Long!").required("Required"),
  description: Yup.string()
    .min(2, "Short!")
    .max(60, "Long!")
    .required("Required"),
  price: Yup.number().min(1, "short!").max(10, "long!").required("Required"),
});

export { newProductSchema };
