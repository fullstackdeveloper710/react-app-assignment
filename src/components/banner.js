import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner_1 from "../assets/images/banner-1.png";
import banner_2 from "../assets/images/banner-2.png";
import "../assets/scss/banner.scss";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={banner_1} alt="banner_1" className="img-fluid" />
          <div className="liBanner__text">
            <span>20% off site wide</span>
            <h3>Our Summer Sale Is Finally Here!</h3>
            <p>
              It is a long established fact that a reader will be distracted{" "}
              <br /> by the readable content of a page when looking at its
              layout.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner_2} alt="banner_2" className="img-fluid" />
          <div className="liBanner__text">
            <span>Up to 15% OFF</span>
            <h3>Men Black Solid Round Neck T-shirt</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
