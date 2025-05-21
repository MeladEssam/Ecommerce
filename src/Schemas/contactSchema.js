import * as yup from "yup";
let contactSchema = yup.object().shape({
  name: yup.string().required("your name is required"),
  email: yup
    .string()
    .email("enter valid email address")
    .required("email address is required"),
  phoneNumber: yup
    .string()
    .matches(/^01[0125][0-9]{8}$/, "invalid phone number")
    .required("phone number is required"),
  subject: yup.string().required("subject is required"),
  message: yup.string().required("message is required"),
});
export default contactSchema;
