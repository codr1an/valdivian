import Navbar from "./Navbar";
import phoneImage from "../../assets/iPhone.png";
import monitorImage from "../../assets/monitor.png";
import tvImage from "../../assets/tv.png";
import laptopImage from "../../assets/laptop.png";
import blackfriday from "../../assets/blackfriday.jpg";
import gaming from "../../assets/gaming.jpg";
import christmas from "../../assets/christmas.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="category-presentation">
        <div className="current-offers">
          <div
            id="offersCarousel"
            className="offers-carousel slide"
            data-bs-interval="5000"
            data-bs-ride="carousel"
          >
            <div className="offers-carousel-inner">
              <div className="offers-carousel-item active">
                <img src={gaming} className="d-block w-100" alt="..." />
              </div>
              <div className="offers-carousel-item">
                <img src={blackfriday} className="d-block w-100" alt="..." />
              </div>
              <div className="offers-carousel-item">
                <img src={christmas} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div
          id="productCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slide">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="product-image">
                      <div className="price-display">12345</div>
                      <img
                        src={phoneImage}
                        className="card-img-top"
                        alt="iPhone"
                      />
                    </div>

                    <h5 className="card-title">iPhone</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div class="button-container">
                      <button type="button" class="btn btn-outline-dark btn-sm">
                        {"> See product"}
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="product-image">
                      <img
                        src={laptopImage}
                        className="card-img-top"
                        alt="Laptop"
                      />
                    </div>
                    <h5 className="card-title">Laptop</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      To product
                    </a>
                  </div>
                  <div className="card">
                    <div className="product-image">
                      <img
                        src={monitorImage}
                        className="card-img-top"
                        alt="Monitor"
                      />
                    </div>
                    <h5 className="card-title">Monitor</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button class="go-to-button" href="/">
                      {">"} To product
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="slide">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="product-image">
                      <img src={tvImage} className="card-img-top" alt="TV" />
                    </div>
                    <h5 className="card-title">TV</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      To product
                    </a>
                  </div>
                  <div className="card">
                    <div className="product-image">
                      <img
                        src={phoneImage}
                        className="card-img-top"
                        alt="iPhone"
                      />
                    </div>
                    <h5 className="card-title">iPhone</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      To product
                    </a>
                  </div>
                  <div className="card">
                    <div className="product-image">
                      <img
                        src={laptopImage}
                        className="card-img-top"
                        alt="Laptop"
                      />
                    </div>
                    <h5 className="card-title">Laptop</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-outline-dark">
                      {">"} See product
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
