import * as yup from "yup";

export const shopSchema = yup.object().shape({
  name: yup
    .string()
    .required("Shop name is required")
    .min(2, "Name must be at least 2 characters"),
  ownerName: yup
    .string()
    .required("Owner name is required")
    .min(2, "Owner name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),
  phone: yup.string().required("Phone number is required"),
  address: yup.string().required("Street address is required"),
  city: yup.string().required("City is required"),
  zip: yup.string().required("Zip / Postal code is required"),
});
