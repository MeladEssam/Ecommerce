import "./Slider.css";
import image1 from "../imgs/10.jpg";
import image2 from "../imgs/11.jpg";

import image4 from "../imgs/14.jpg";

function Slider() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={image2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h4 className="mb-3 fw-bold text-capitalize">women's clothing</h4>
            <p>Beautiful Skirts With Good Price</p>
          </div>
        </div>
        <div className="carousel-item " data-bs-interval="10000">
          <img src={image1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h4 className="mb-3 fw-bold text-capitalize">men's clothing</h4>
            <p>Beautiful Shirt With Good Price</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={image4} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h4 className="mb-3 fw-bold  text-capitalize">
              Electronics Devices
            </h4>
            <p>Perfect Materials And Good Price</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
