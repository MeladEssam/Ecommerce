import { Card, Button } from "react-bootstrap";
import "./Products.css";
import productImage from "../imgs/13.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Dropdown from "react-bootstrap/Dropdown";
function Products() {
  let [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);
  //   function that fetch products from api
  function fetchProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((e) => {
        console.log(e);
        console.log(e.message);
      });
  }

  let productsElements;

  if (products !== null) {
    productsElements = products.map((product) => {
      return (
        <div
          key={product.id}
          className="mb-4 product col-md-6 col-lg-4  col-xxl-3"
        >
          <Card className=" shadow h-100 ">
            <div className="product-imgae">
              <Card.Img
                variant="top"
                src={product.image}
                className=" img-fluid "
              />
            </div>

            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Text className="fw-bold text-black-50 product-desc">
                {product.title}
              </Card.Text>
              <Card.Title className="mb-4 fs-3 main-color fw-bold ">
                ${product.price}
              </Card.Title>
              <Link to={`product/${product.id}`}>
                <Button
                  variant="primary"
                  className="fw-bold   border-0 me-auto  py-2 px-4 yellow-color "
                >
                  More Details
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }

  let fetchProductsInCategory = (category) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  let [categories, setCtegories] = useState(null);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCtegories(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  console.log(categories);
  let categoriesBtns;
  if (categories) {
    categoriesBtns = categories.map((category) => {
      return (
        <button
          onClick={() => {
            fetchProductsInCategory(category);
          }}
          key={category}
          variant="primary"
          className="fw-bold border-0  py-2 px-4 yellow-color categoryBtn  rounded"
        >
          {category}
        </button>
      );
    });
  }

  const isMobile = useMediaQuery({ maxWidth: 993 });

  return (
    <div className="products py-5">
      <div className="container py-5">
        <h1 className="text-center main-title ">Products In Our Store</h1>

        <div className="categories-content mt-5">
          {isMobile ? (
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="fw-bold yellow-color"
              >
                All Products Categories
              </Dropdown.Toggle>

              <Dropdown.Menu className=" shadow">
                <Dropdown.Item
                  onClick={() => {
                    axios
                      .get(`https://fakestoreapi.com/products`)
                      .then((res) => {
                        setProducts(res.data);
                      })
                      .catch((e) => {
                        console.log(e.message);
                      });
                  }}
                >
                  All Products
                </Dropdown.Item>
                {categories &&
                  categories.map((category) => {
                    return (
                      <Dropdown.Item
                        key={category}
                        onClick={() => {
                          fetchProductsInCategory(category);
                        }}
                      >
                        {" "}
                        {category}
                      </Dropdown.Item>
                    );
                  })}
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <div className="d-flex gap-2  flex-wrap">
              <button
                onClick={() => {
                  fetchProducts();
                }}
                variant="primary"
                className="fw-bold border-0  py-2 px-4 yellow-color categoryBtn  rounded"
              >
                All Products
              </button>
              {categoriesBtns}
            </div>
          )}
        </div>

        <div className="row mt-5 py-4">{productsElements}</div>
      </div>
    </div>
  );
}
export default Products;
