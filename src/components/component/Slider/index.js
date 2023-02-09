import React from "react";
import Slider from "react-slick";

import "./Slider.scss";
import { Dataslide } from "./Dataslice";
import { Link } from "react-router-dom";

export default function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="container">
      <div className="gallery">
        <div className="gallery-container">
          <Slider {...settings}>
            {Dataslide.map((item) => {
              return (
                <div className="gallery-item gallery-item-previous">
                  <div className="zm-card-img">
                    <Link to='/'><img src={item.src} alt="" /></Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
