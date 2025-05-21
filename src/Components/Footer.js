import "./footer.css";
import logo from "../imgs/ecomerace-logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  let navigate = useNavigate();
  return (
    <div className="footer mb-0 py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-5 mb-lg-0 d-flex justify-content-center justify-content-md-start">
            <div className="site-name  ">
              <div
                className="d-flex gap-3  mb-4 align-items-center align-items-md-start site-logo"
                onClick={() => {
                  navigate("/");
                }}
              >
                <img src={logo} alt="" className=" img-fluid footer-logo" />
                <h4 className="fw-bold yellow-color">Melad Tech</h4>
              </div>

              <p className="fs-6 fw-bold text-white ">
                Smart shopping starts here.
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-2 mb-5 mb-lg-0 ">
            <div className="quick-links  ">
              <h4 className="yellow-color">Quick links</h4>
              <ul className=" list-unstyled mt-4">
                <li className="mb-3">
                  <Link
                    to={"/"}
                    className=" text-decoration-none text-white fw-bold fs-6 "
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to={"/"}
                    className=" text-decoration-none text-white fw-bold fs-6"
                  >
                    All Products
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to={"/about"}
                    className=" text-decoration-none text-white fw-bold fs-6"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to={"/contact"}
                    className=" text-decoration-none text-white fw-bold fs-6"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to={"/cart"}
                    className=" text-decoration-none text-white fw-bold fs-6"
                  >
                    Your Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-2 mb-5 mb-lg-0">
            <div className="social-media ">
              <h4 className="yellow-color fw-bold">Social Media </h4>
              <h6 className="mb-4 mt-4">
                <a
                  className="text-white text-decoration-none  d-flex align-items-center"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/"
                >
                  <FontAwesomeIcon icon={faSquareFacebook} className="fs-4" />
                  <span className="ms-2">Facebook</span>
                </a>
              </h6>
              <h6>
                <a
                  className="text-white text-decoration-none d-flex align-items-center "
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/melad-essam-b93213211/"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="fs-4" />
                  <span className="ms-2">LinkedIn</span>
                </a>
              </h6>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 ">
            <div className="polices  ">
              <h4 className="mb-4 fw-bold yellow-color">
                Our Polices,Terms and Returns
              </h4>
              <div className="policy mb-4">
                <h5 className="fw-bold text-white mb-3">Privacy Policy</h5>
                <p className="fs-6 text-white-50 ">
                  We are committed to protecting your personal information.
                </p>
              </div>
              <div className="policy mb-4">
                <h5 className="fw-bold text-white mb-3">Terms of Use</h5>
                <p className="fs-6 text-white-50 ">
                  By using our website, you agree to our terms and conditions.
                </p>
              </div>
              <div className="policy mb-4">
                <h5 className="fw-bold text-white mb-3">Return Policy</h5>
                <p className="fs-6 text-white-50 ">
                  We accept returns within 14 days of delivery if the item is
                  unused and in its original packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
