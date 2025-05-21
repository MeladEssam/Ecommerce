import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../imgs/ecomerace-logo.jpg";
// import logo from "../imgs/1.jpg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
function NavBar() {
  let cart = useSelector((state) => state.cart);
  // local storage
  useEffect(() => {
    localStorage.setItem("cart_products", JSON.stringify(cart));
  }, [cart]);
  return (
    <Navbar expand="lg" className=" shadow sticky-top">
      <Container>
        <Link
          to={"/"}
          className="d-flex align-items-center text-decoration-none"
        >
          <img className="logo" src={logo} alt="" />
          <span className="fw-bold ms-2 fs-4 yellow-color">Melad Tech</span>
        </Link>

        <button
          className="navbar-toggler navgation-bar"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#basic-navbar-nav"
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-start align-items-lg-center ">
            <Link to={"/"} className=" text-decoration-none w-100">
              Home
            </Link>
            <Link to={"/about"} className=" text-decoration-none w-100">
              About
            </Link>
            <Link to={"/contact"} className=" text-decoration-none w-100">
              Contact
            </Link>
            <Link
              to={"/cart"}
              className=" text-decoration-none position-relative mt-2 cart-icon"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="yellow-color fs-3"
              />
              <span className="fw-bold  text-white position-absolute cart-count ">
                {" "}
                {cart.length}
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
