import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import contactSchema from "../Schemas/contactSchema";
function ContactUs() {
  let navigate = useNavigate();
  let onSubmit = () => {
    navigate("/thank-you");
  };
  let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      },
      validationSchema: contactSchema,
      onSubmit,
    });
  // form-control
  console.log(values);
  console.log(errors);
  return (
    <div className="contact-us pb-5">
      <div className="container py-5 ">
        <div className="row py-5 justify-content-center">
          <div className=" col-lg-11 ">
            <div className="contact-header main-color  mb-5">
              <div className="d-flex  gap-2   justify-content-center">
                <span>
                  {" "}
                  <FontAwesomeIcon className="fs-4 mt-2" icon={faPhoneVolume} />
                </span>
                <h1 className="fw-bold px-2">Contact Us</h1>
              </div>
              <p className="fs-5 fw-bold  text-black-50 mt-3  text-center">
                Have a question or need help? just send us a message!
              </p>
            </div>

            <div className="contact-form shadow p-3 ">
              <form onSubmit={handleSubmit}>
                <div className="d-flex gap-0 gap-lg-4 flex-column flex-lg-row ">
                  <div className="mb-3 flex-grow-1">
                    <label
                      htmlFor="fullname"
                      className="form-label text-black-50 fw-bold"
                    >
                      Full Name
                    </label>
                    <input
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="fullname"
                      placeholder="full name"
                      name="name"
                      // className="form-control"
                      className={
                        errors.name && touched.name
                          ? "form-control input-error"
                          : "form-control"
                      }
                    />
                    {errors.name && touched.name ? (
                      <p className="error">{errors.name}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-3 flex-grow-1">
                    <label
                      htmlFor="emial"
                      className="form-label text-black-50 fw-bold"
                    >
                      Email address
                    </label>
                    <input
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="email"
                      // className="form-control"
                      className={
                        errors.email && touched.email
                          ? "form-control input-error"
                          : "form-control"
                      }
                      id="emial"
                      aria-describedby="emailHelp"
                      placeholder="forExample@gmail.com"
                      autoComplete="email"
                      name="email"
                    />
                    {errors.email && touched.email ? (
                      <p className="error">{errors.email}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="d-flex gap-0 gap-lg-4 flex-column flex-lg-row ">
                  <div className="mb-3 flex-grow-1">
                    <label
                      htmlFor="phone"
                      className="form-label text-black-50 fw-bold"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      // className="form-control"
                      className={
                        errors.phoneNumber && touched.phoneNumber
                          ? "form-control input-error"
                          : "form-control"
                      }
                      id="phone"
                      placeholder="phone number"
                      autoComplete="phone"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <p className="error">{errors.phoneNumber}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-3 flex-grow-1">
                    <label
                      htmlFor="subject"
                      className="form-label text-black-50 fw-bold"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      // className="form-control"
                      className={
                        errors.subject && touched.subject
                          ? "form-control input-error"
                          : "form-control"
                      }
                      id="subject"
                      placeholder="Subject"
                      autoComplete="subject"
                      name="subject"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.subject && touched.subject ? (
                      <p className="error">{errors.subject}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="mb-3 ">
                  <label
                    htmlFor="textarea"
                    className="form-label text-black-50 fw-bold "
                  >
                    Your Message
                  </label>
                  <textarea
                    // className="form-control"
                    className={
                      errors.message && touched.message
                        ? "form-control input-error"
                        : "form-control"
                    }
                    placeholder="Leave a comment here"
                    id="textarea"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  {errors.message && touched.message ? (
                    <p className="error">{errors.message}</p>
                  ) : (
                    ""
                  )}
                </div>

                <button
                  type="submit "
                  className="btn  fw-bold px-4 py-2 yellow-color mt-4 send-message-btn"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
