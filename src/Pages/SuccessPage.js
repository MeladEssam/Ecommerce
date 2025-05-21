import { useNavigate } from "react-router-dom";
import "./SuccessPage.css";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SuccessPage() {
  const fakeOrderId = `ORD${Math.floor(100000 + Math.random() * 900000)}`;
  let navigate = useNavigate();
  return (
    <div className="success mb-5 pb-5">
      <div className="container py-5 mt-5 ">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-xl-8">
            <div className="success-info shadow p-2 p-sm-3 ">
              <h4 className=" text-success fw-bold title-success">
                {" "}
                <span className=" ">Congratulations!</span> Your Order Has Been
                Confirmed.
              </h4>
              <p className="fw-bold text-black-50 fs-5 my-3 success-paragraph">
                Order Number:{" "}
                <strong className="main-color">{fakeOrderId}</strong>
              </p>

              <div className="d-flex  align-items-start gap-2 main-color my-3">
                <FontAwesomeIcon className="fs-4 mt-2" icon={faPhoneVolume} />
                <p className="fw-bold  fs-5 m-0  success-paragraph">
                  We will contact you soon to confirm the order details and
                  delivery time.
                </p>
              </div>

              <button
                className="btn  fw-bold px-5 py-2 yellow-color back-to-home mt-4"
                onClick={() => navigate("/")}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SuccessPage;
