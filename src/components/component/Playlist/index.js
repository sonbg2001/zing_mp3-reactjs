import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Data } from "./Data";
import "./Playlist.scss";
export default function Playlist() {
  return (
    <div className="container">
      <h3 className="zm-section">
        Gần đây
        <Link to="" className="discovery-btn">
          Tất cả <MdOutlineKeyboardArrowRight />
        </Link>
      </h3>
      <div className="zm-carousel-wrapper">
        <div className="zm-carousel">
          <div className="zm-carousel__container">
            {Data.map((item, index) => {
              return (
                <div key={index} className="zm-carousel-item">
                  <div className="playlist-wrapper">
                    <div className="zm-card">
                      <div className="zm-card-image">
                        {/* <figure className="image"> */}
                          <img src={item.src} alt="" />
                        {/* </figure> */}
                      </div>
                      <div className="zm-card-content">
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
