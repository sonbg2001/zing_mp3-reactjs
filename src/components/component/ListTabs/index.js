import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import { All } from "./All.js";
import { VietNam } from "./VietNam.js";
import { Qte } from "./Qte.js";
import "./ListTabs.scss";
// import Sonnet from '../../components/Sonnet';

function UncontrolledExample() {
  return (
    <div>
      <h3 className="zm-section-title title is-2">Mới phát hành</h3>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="all" title="Tất cả">
          <div className="columns is-multiline">
            <div className="column mar-b-0 is-fullhd-4 is-widescreen-4 is-desktop-4 is-touch-6 is-tablet-6">
              <div className="list">
                {All.map((item, index) => {
                  return (
                    <div key={index} className="list-item">
                      <div className="media">
                        <div className="media-left">
                          <div className="song-thumb">
                            <figure className="image is-60x60">
                              <img src={item.img} alt="" />
                            </figure>
                          </div>
                          <div className="card-info">
                            <div className="title-wrapper">
                              <span className="item-title title">
                                {item.name}
                              </span>
                              <h3 className="is-one-line is-truncate subtitle">
                                {item.author}
                              </h3>
                              <div className="time-release">
                                <span>{item.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="media-right"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="vietnam" title="Việt Nam">
          <div className="columns is-multiline">
            <div className="column mar-b-0 is-fullhd-4 is-widescreen-4 is-desktop-4 is-touch-6 is-tablet-6">
              <div className="list">
                {VietNam.map((item, index) => {
                  return (
                    <div key={index} className="list-item">
                      <div className="media">
                        <div className="media-left">
                          <div className="song-thumb">
                            <figure className="image is-60x60">
                              <img src={item.img} alt="" />
                            </figure>
                          </div>
                          <div className="card-info">
                            <div className="title-wrapper">
                              <span className="item-title title">
                                {item.name}
                              </span>
                              <h3 className="is-one-line is-truncate subtitle">
                                {item.author}
                              </h3>
                              <div className="time-release">
                                <span>{item.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="media-right"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="quocte" title="Quốc tế">
          <div className="columns is-multiline">
            <div className="column mar-b-0 is-fullhd-4 is-widescreen-4 is-desktop-4 is-touch-6 is-tablet-6">
              <div className="list">
                {Qte.map((item, index) => {
                  return (
                    <div key={index} className="list-item">
                      <div className="media">
                        <div className="media-left">
                          <div className="song-thumb">
                            <figure className="image is-60x60">
                              <img src={item.img} alt="" />
                            </figure>
                          </div>
                          <div className="card-info">
                            <div className="title-wrapper">
                              <span className="item-title title">
                                {item.name}
                              </span>
                              <h3 className="is-one-line is-truncate subtitle">
                                {item.author}
                              </h3>
                              <div className="time-release">
                                <span>{item.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="media-right"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Tab>
        <Link to="" className="discovery-btn">
          Tất cả <MdOutlineKeyboardArrowRight />
        </Link>
      </Tabs>
    </div>
  );
}

export default UncontrolledExample;
