import React from "react";

import { Data } from "./Data";
import "./Channel.scss";
export default function Channel() {
  return (
    <div className="zm-section playlist-section zm-home-recent channel-section pad-0">
      <div className="container">
        <h3 className="zm-section">Có thể bạn muốn nghe</h3>
        <div className="zm-carousel-wrapper">
          <div className="zm-carousel">
            <div className="zm-carousel__container">
              {Data.map((item, index) => {
                return (
                  <div className="zm-carousel-item channel" key={index}>
                    <div className="playlist-wrapper">
                      <div className="zm-card">
                        <div className="zm-card-image">
                          {/* <figure className="image"> */}
                          <img src={item.src} alt="" />
                          {/* </figure> */}
                        </div>
                        <div className="zm-card-content">
                          <h4 className="title is-6">{item.title}</h4>
                          <h3 className="mt-10 subtitle">{item.author}</h3>
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
    </div>
  );
}
