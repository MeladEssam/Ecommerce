import { useNavigate } from "react-router-dom";
import image from "../imgs/ecomerace-logo.jpg";
import "./AboutPage.css";

function About() {
  let navigate = useNavigate();
  let categories = [
    {
      name: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      name: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    },
    {
      name: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      name: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
  ];

  return (
    <div className="about ">
      <div className="about-main py-5 d-flex  align-items-center">
        <div className="container py-5  mb-lg-5">
          {/* <h2 className="fw-bold yellow-color">Welcome To Melad Tech </h2> */}
          <div className="row mb-lg-5 justify-content-between py-5  flex-column-reverse flex-lg-row gap-5 gap-lg-0">
            <div className="col-lg-7">
              <div className="about-info">
                {/* <h3 className="fw-bold mb-3">Melad Tech</h3> */}
                <h2 className="fw-bold yellow-color mb-5">
                  Welcome To Melad Tech{" "}
                </h2>

                <p className="text-white-50 fw-bold fs-6 lh-lg">
                  We created this store with one goal in mind — to offer you
                  high-quality products, great prices, and a smooth shopping
                  experience from start to finish.
                </p>
                <p className="text-white-50 fw-bold fs-6 lh-lg">
                  Here, you’ll find a curated collection of items designed to
                  fit your lifestyle, delivered to your door with care.
                </p>
                <p className="text-white-50 fw-bold fs-6 lh-lg">
                  At <span className="yellow-color fs-5">Melad Tech</span>, we
                  believe that online shopping should be easy, fun, and
                  stress-free.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-image d-flex justify-content-center ">
                {/* <img src={image} alt="" className="about-image img-fluid " /> */}
                <img
                  src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  alt=""
                  className="about-image img-fluid "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-products py-5">
        <div className="container py-5">
          <h2 className="main-color text-center fw-bold">
            What You Will Find at Melad Tech{" "}
          </h2>
          <div className="row mt-5">
            {categories.map((category) => {
              return (
                <div className="col-sm-6 col-lg-4 col-xl-3" key={category.name}>
                  <div className="our-product shadow p-3">
                    <h4 className="text-black-50 fw-bold mb-4 text-center">
                      {category.name}
                    </h4>
                    <div className="product-imgae d-flex justify-content-center">
                      <img src={category.image} alt="" className=" img-fluid" />
                    </div>

                    <div className="d-flex justify-content-center mt-5">
                      <button
                        onClick={() => {
                          navigate(`/products/${category.name}`);
                        }}
                        // onClick={() => navigate("/cart")}
                        className="btn  fw-bold px-4 py-2 yellow-color browse-more w-100   "
                      >
                        Browse More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
