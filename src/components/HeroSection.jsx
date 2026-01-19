import { Link } from 'react-router-dom';
const base = import.meta.env.BASE_URL;

const HeroSection = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={`${base}images/banner.jpg`}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption  my-5">
            <h1 className="fw-bold text-dark">Style That Speaks</h1>
            <Link
              to="/hoodie"
              className="btn btn-outline-dark btn-sm rounded-pill mt-3"
            >
              Check Now
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={`${base}images/banner2.jpg`}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption my-5">
            <h1 className="fw-bold text-white ">Wear Your Confidence</h1>
            <Link
              to="/punjabi"
              className="btn btn-outline-primary btn-sm rounded-pill mt-3"
            >
              Check Now
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={`${base}images/kids_banner.jpg`}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption  my-5">
            <h1 className="fw-bold text-warning">Redefining Everyday Luxury</h1>
            <Link
              to="/tshirt"
              className="btn btn-outline-warning btn-sm rounded-pill mt-3"
            >
              Check Now
            </Link>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default HeroSection;
