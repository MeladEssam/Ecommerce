import * as yup from "yup";
let checkOutSchema = yup.object().shape({
  name: yup.string().required("your name is required"),
  email: yup
    .string()
    .email("enter valid email address")
    .required("email address is required"),
  phoneNumber: yup
    .string()
    .matches(/^01[0125][0-9]{8}$/, "invalid phone number")
    .required("phone number is required"),
  country: yup.string().required("the country is required"),
  city: yup.string().required("the city is required"),
  address: yup.string().required("the detailed address is required"),
  cardNumber: yup.string().required("card Number is required"),
  expiredDate: yup.string().required("card expired date is required"),
  CVV: yup.string().required("card cvv is required"),
});
export default checkOutSchema;
