import * as yup from "yup";

const registerSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Name is required")
    .max(32, "Name must be less than 100 characters"),
  address: yup
    .string()
    .required("Address is required")
    .max(32, "Address must be less than 100 characters"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^0[0-9].*$/, "validateTelJpAreaCode")
    .matches(
      /^0\d{9,10}$|^0\d{1,3}-\d{1,4}-\d{4}$|^(070|080|090)-\d{4}-\d{4}$|^0120-\d{3}-\d{3}$/,
      "validateTelJpFormat"
    ),
  gender: yup.string().required("Gender is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export default registerSchema;
