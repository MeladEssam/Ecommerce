import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  decrementProductQuantity,
  deleteAllProducts,
  deleteProduct,
  incrementProductQuantity,
} from "../rtk/Cart-slice";
import { updateState } from "../rtk/Toast-slice";

function Cart() {
  let products = useSelector((state) => state.cart);
  console.log(products);

  let dispatch = useDispatch();
  let deleteProductFromCart = (product) => {
    Swal.fire({
      title: "You Are Sure To Delete This Product From Cart?",
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        dispatch(deleteProduct(product));
        dispatch(
          updateState({
            status: true,
            message: "The Product Is Deleted From Your Cart",
            danger: true,
          })
        );
      }
    });
  };
  let DecrementProductQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementProductQuantity(product));
    } else {
      Swal.fire({ title: "Can't Decrement Quantity Again Because It's 1" });
    }
  };
  let clearCart = () => {
    Swal.fire({
      title: "Do You Want To Clear Your Cart?",
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        dispatch(deleteAllProducts());
        dispatch(
          updateState({
            status: true,
            message: "All Products Are Deleted From Your Cart",
            danger: true,
          })
        );
      }
    });
  };

  let totalprice;
  totalprice = products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div className="cart py-5">
      <div className="container  py-4">
        <h2 className="cart-title fw-bold main-color mb-5">Shopping Cart</h2>

        <div className="row  d-flex  flex-column-reverse gap-5 gap-lg-0  flex-lg-row justify-content-between  ">
          <div className="col-lg-8">
            <div className=" mb-4 shadow px-3 cart-content">
              {products.length === 0 ? (
                <h4 className=" text-black-50 fw-bold text-center py-3">
                  There Is No Products In Your Cart
                </h4>
              ) : (
                products.map((product) => {
                  return (
                    <div
                      className="product  py-3 d-md-flex gap-4 align-content-center  "
                      key={product.id}
                    >
                      <div className="image d-flex justify-content-center mb-4 d-md-block mb-md-0">
                        <img src={product.image} alt="" className="img-fluid" />
                      </div>
                      <div className="product-info d-block d-md-flex flex-column justify-content-center">
                        <h6 className="fw-bold text-black-50">
                          {product.title}
                        </h6>
                        <h5 className="main-color fw-bold mt-0">
                          ${product.price}
                        </h5>
                        <div className="quantity mt-0">
                          <h6 className="fw-bold text-black-50 m-0">
                            Quantity : <span>{product.quantity}</span>
                          </h6>
                        </div>
                        <div className="actions mt-4 d-flex gap-3 ">
                          <span
                            onClick={() => {
                              DecrementProductQuantity(product);
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faMinus}
                              className="fs-6 main-color "
                            />
                          </span>
                          <span
                            onClick={() => {
                              dispatch(incrementProductQuantity(product));
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faPlus}
                              className="fs-6 main-color"
                            />
                          </span>
                          <span
                            onClick={() => {
                              deleteProductFromCart(product);
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              className=" text-danger fs-6"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="row mt-5">
              <div className="buttons gap-3 d-flex  flex-column flex-md-row ">
                <Link
                  to={"/"}
                  className=" btn  fw-bold px-4 py-2 yellow-color back-to-products  shadow-lg  "
                >
                  Go Back To Products
                </Link>
                {products.length > 0 && (
                  <button
                    onClick={() => {
                      clearCart();
                    }}
                    className=" btn  fw-bold px-4 py-2 yellow-color clear-cart  shadow-lg  "
                  >
                    Clear Your Cart
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* cart summary */}
          <div className="col-lg-4">
            <div className="cart-summary  shadow px-4 py-3  ">
              <h5 className=" fw-bold  mb-4 main-color">Order Summary</h5>
              <h6 className="fw-bold w-100 d-flex mb-3  text-black-50">
                Shipping{" "}
                <span className="fs-5 fw-bold ms-auto main-color">Free</span>
              </h6>
              <h6 className="fw-bold w-100 d-flex text-black-50">
                Total{" "}
                <span className="fs-5 fw-bold ms-auto main-color">
                  ${totalprice.toFixed(2)}
                </span>
              </h6>
              {products.length > 0 && (
                <Link
                  to={"/checkout"}
                  className="btn mt-4 fw-bold px-2 py-2 yellow-color proceed-checkout w-100"
                >
                  Proceed To CheckOut
                </Link>
              )}
            </div>
          </div>

          {/* summary */}
          {/* <div className="col-lg-2 col-xl-3">
            <h2>Summar Cart</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Cart;
