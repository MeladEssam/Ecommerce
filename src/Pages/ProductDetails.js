import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./ProductDetails.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../rtk/Cart-slice";
import { updateState } from "../rtk/Toast-slice";
function ProductDetails() {
  let dispatch = useDispatch();
  let [product, setProduct] = useState(null);
  let { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <div className="product-card py-5">
      <div className="container py-5">
        <div className="row  py-5 my-5 flex-column flex-lg-row gap-5 align-items-lg-center  ">
          <div className="col-sm-10 col-lg-5">
            <div className="product-Image d-flex justify-content-center ">
              <img
                src={product && product.image}
                alt=""
                className=" img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold fs-2 main-color mb-3">
              {product && product.title}
            </h2>
            <p className="fs-5  text-black-50 mb-3 desc">
              {product && product.description}
            </p>
            <p className="fs-5 text-capitalize fw-bold  mb-4 category">
              {product && product.category} Category
            </p>

            <h3 className="fw-bold">
              {/* Price:{" "} */}
              <span className="main-color fs-1">
                ${product && product.price}
              </span>{" "}
            </h3>
            <div className="btns d-flex gap-3 flex-column flex-sm-row mt-5">
              <button
                onClick={() => {
                  dispatch(addProduct(product));
                  dispatch(
                    updateState({
                      status: true,
                      message: "Added To Cart With Successfully",
                    })
                  );
                }}
                className=" btn  fw-bold px-5 py-2 yellow-color add-to-card"
              >
                Add To Cart
              </button>
              <Link to={"/"} className=" btn  fw-bold px-4 py-2 yellow-color  ">
                Go Back To Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
