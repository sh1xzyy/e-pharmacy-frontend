import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z0-9_]{3,20}$/, "Invalid email format")
    .required("Name is required"),
  phone: Yup.string()
    .matches(/^(\+380|0)\d{9}$/, "Invalid email format")
    .required("Phone is required"),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});
