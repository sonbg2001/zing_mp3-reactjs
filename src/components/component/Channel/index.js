import React from "react";

import { Data } from "./Data";
export default function Channel() {
  return (
    <div className="container">
      <h3 className="zm-section">Có thể bạn muốn nghe</h3>
      <div className="zm-carousel-wrapper">
        <div className="zm-carousel">
          <div className="zm-carousel__container">
            {Data.map((item, index) => {
              return (
                <div className="zm-carousel-item" key={index}>
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
