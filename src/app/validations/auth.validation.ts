import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required("Không được để trống"),
  password: Yup.string().required("Không được để trống"),
});

export const signUpValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Tối thiểu 6 ký tự")
    .max(40, "Tối đa 40 ký tự")
    .matches(/^[\d\w]+$/, "Chỉ bao gồm a-z, A-Z, 0-9"),
  password: Yup.string().required("Không được để trống"),
  confirmPassword: Yup.string()
    .required("Không được để trống")
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
  phone: Yup.string()
    .required("Không được để trống")
    .matches(/^[0-9]{10}$/, "Số điện thoại phải có 10 số"),
});

export const registerSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Name is required")
    .max(32, "Name must be less than 100 characters"),
  address: Yup.string()
    .required("Address is required")
    .max(32, "Address must be less than 100 characters"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^0[0-9].*$/, "validateTelJpAreaCode")
    .matches(
      /^0\d{9,10}$|^0\d{1,3}-\d{1,4}-\d{4}$|^(070|080|090)-\d{4}-\d{4}$|^0120-\d{3}-\d{3}$/,
      "validateTelJpFormat"
    ),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});
