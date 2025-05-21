import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function ThankYouPage() {
  let navigate = useNavigate();
  return (
    <div className="thank-you mb-5 pb-5">
      <div className="container py-5 mt-5 ">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-xl-8">
            <div className="success-info shadow p-2 p-sm-3 ">
              <h4 className=" text-success fw-bold title-success">
                Your Message Was sent With Successfully!
              </h4>

              <div className="d-flex  align-items-start gap-2 main-color my-3">
                <FontAwesomeIcon className="fs-4 mt-2" icon={faPhoneVolume} />
                <p className="fw-bold  fs-5 m-0  success-paragraph">
                  Our team will contact you shortly to assist you with your
                  problem.
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
export default ThankYouPage;
