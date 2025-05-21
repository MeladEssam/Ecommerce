import { useState } from "react";
import "./CheckOutPage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAllProducts } from "../rtk/Cart-slice";
import { useFormik } from "formik";
import checkOutSchema from "../Schemas/checkOutSchema";
function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let onSubmit = () => {
    dispatch(deleteAllProducts());
    navigate("/success");
  };
  let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phoneNumber: "",
        country: "",
        city: "",
        address: "",
        cardNumber: "",
        expiredDate: "",
        CVV: "",
      },
      validationSchema: checkOutSchema,
      onSubmit,
    });

  return (
    <div className="checkout pb-5">
      <div className="container  py-5">
        <div className="row justify-content-center">
          <div className=" col-lg-11 ">
            <h2 className="fw-bold main-color mb-5">Complete Your Order</h2>
            <div className="check-content shadow p-3">
              <form onSubmit={handleSubmit}>
                <div className="d-flex gap-0 gap-lg-4 flex-column flex-lg-row">
                  <div className="mb-3 flex-grow-1">
                    <label
                      htmlFor="name"
                      className="form-label fw-bold text-black-50"
                    >
                      Full Name
                    </label>
                    <input
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      id="name"
                      placeholder="your full name"
                      name="name"
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
                      htmlFor="email"
                      className="form-label fw-bold text-black-50"
                    >
                      Email Address
                    </label>
                    <input
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      type="email"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="email address"
                      className={
                        errors.email && touched.email
                          ? "form-control input-error"
                          : "form-control"
                      }
                    />
                    {errors.email && touched.email ? (
                      <p className="error">{errors.email}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="d-flex gap-0 gap-lg-4 flex-column flex-lg-row">
                  <div className="mb-3 flex-grow-1">
                    <label
                      htmlFor="phoneNum"
                      className="form-label fw-bold text-black-50"
                    >
                      Phone Number
                    </label>
                    <input
                      name="phoneNumber"
                      type="text"
                      id="phoneNum"
                      placeholder="phone number"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.phoneNumber && touched.phoneNumber
                          ? "form-control input-error"
                          : "form-control"
                      }
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <p className="error">{errors.phoneNumber}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-3 flex-grow-1">
                    <label
                      htmlFor="country"
                      className="form-label fw-bold text-black-50"
                    >
                      Country
                    </label>
                    <input
                      name="country"
                      type="text"
                      // className="form-control"
                      id="country"
                      placeholder="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.country && touched.country
                          ? "form-control input-error"
                          : "form-control"
                      }
                    />
                    {errors.country && touched.country ? (
                      <p className="error">{errors.country}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="d-flex gap-0 gap-lg-4 flex-column flex-lg-row">
                  <div className="mb-3 flex-grow-1">
                    <label
                      htmlFor="city"
                      className="form-label fw-bold text-black-50"
                    >
                      City
                    </label>
                    <input
                      name="city"
                      type="text"
                      id="city"
                      placeholder="city "
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.city && touched.city
                          ? "form-control input-error"
                          : "form-control"
                      }
                    />
                    {errors.city && touched.city ? (
                      <p className="error">{errors.city}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb-3 flex-grow-1">
                    <label
                      htmlFor="detailedAddress"
                      className="form-label fw-bold text-black-50"
                    >
                      Detailed Address
                    </label>
                    <input
                      name="address"
                      type="text"
                      id="detailedAddress"
                      placeholder="detailed address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.address && touched.address
                          ? "form-control input-error"
                          : "form-control"
                      }
                    />
                    {errors.address && touched.address ? (
                      <p className="error">{errors.address}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="d-flex gap-0 gap-lg-4 flex-column flex-lg-row mt-3">
                  <div className="mb-3 flex-grow-1">
                    <label
                      htmlFor="shippingMethod"
                      className="form-label fw-bold text-black-50 mb-3"
                    >
                      Select Shipping Method
                    </label>
                    <select id="shippingMethod" className="form-select p-2">
                      <option value="standard">Standard Shipping</option>
                      <option value="express">Express Shipping</option>
                      <option value="pickup">Store Pickup</option>
                    </select>
                  </div>

                  <div className="mb-3 flex-grow-1">
                    <label
                      htmlFor="shippingMethod"
                      className="form-label fw-bold text-black-50 mb-3"
                    >
                      Select Payment Method
                    </label>
                    <select
                      id="paymentMethod"
                      className="form-select p-2"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <option value="cod">Cash on Delivery </option>
                      <option value="card">Credit Card </option>
                      <option value="wallet">Digital Wallet</option>
                    </select>
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <div className="credit-card">
                    <h6 className="fw-bold main-color mb-4  fs-5">
                      Credit Information
                    </h6>
                    <div className="d-flex gap-0 gap-lg-4 flex-column flex-lg-row">
                      <div className="mb-3 flex-grow-1">
                        <label
                          htmlFor="cardNumber"
                          className="form-label fw-bold text-black-50"
                        >
                          Card Number
                        </label>
                        <input
                          name="cardNumber"
                          type="text"
                          id="cardNumber"
                          placeholder="Enter card number"
                          value={values.cardNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.cardNumber && touched.cardNumber
                              ? "form-control input-error"
                              : "form-control"
                          }
                        />
                        {errors.cardNumber && touched.cardNumber ? (
                          <p className="error">{errors.cardNumber}</p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="mb-3 flex-grow-1">
                        <label
                          htmlFor="expiredDate"
                          className="form-label fw-bold text-black-50"
                        >
                          Expiry Date
                        </label>
                        <input
                          name="expiredDate"
                          type="text"
                          id="expiredDate"
                          placeholder="MM/YY/YY"
                          value={values.expiredDate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.expiredDate && touched.expiredDate
                              ? "form-control input-error"
                              : "form-control"
                          }
                        />
                        {errors.expiredDate && touched.expiredDate ? (
                          <p className="error">{errors.expiredDate}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3 ">
                          <label
                            htmlFor="CVV"
                            className="form-label fw-bold text-black-50"
                          >
                            CVV
                          </label>
                          <input
                            name="CVV"
                            type="text"
                            id="CVV"
                            placeholder="CVV"
                            value={values.CVV}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.CVV && touched.CVV
                                ? "form-control input-error"
                                : "form-control"
                            }
                          />
                          {errors.CVV && touched.CVV ? (
                            <p className="error">{errors.CVV}</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="btns mt-5 w-100 d-flex gap-3  flex-column flex-sm-row">
                  <button
                    type="submit"
                    className="btn  fw-bold px-4 py-2 yellow-color back-to-products  "
                  >
                    Place Your Order
                  </button>
                  <button
                    onClick={() => navigate("/cart")}
                    className="btn  fw-bold px-4 py-2 yellow-color back-to-products  "
                  >
                    Back To Your Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
