import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./ProductsInCategory.css";
function ProductsInCategory() {
  let navigate = useNavigate();
  let { category } = useParams();

  let [products, setProducts] = useState(null);
  console.log(products);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

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
              <Link to={`/product/${product.id}`}>
                <Button
                  variant="primary"
                  className="fw-bold border-0 me-auto py-2 px-4 yellow-color "
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

  return (
    <div className="products py-5">
      <div className="container py-5">
        <h1 className="text-center main-title  text-capitalize mb-5">
          {category} Products
        </h1>

        <div className="row mt-5 py-4">{productsElements}</div>
        <div className="">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="btn  fw-bold px-5 py-2 yellow-color back-to-home  "
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductsInCategory;
