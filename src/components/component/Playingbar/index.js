import { memo, useState } from "react";
import "./Playingbar.scss";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious, BiWindows } from "react-icons/bi";
import { BsThreeDots, BsPlayCircle, BsMusicNoteList } from "react-icons/bs";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";

import { GiMicrophone } from "react-icons/gi";
import { TbRepeat, TbRepeatOnce } from "react-icons/tb";
import { FaRandom } from "react-icons/fa";
import { FiPauseCircle } from "react-icons/fi";

function Playingbar() {
  const [play, setPlay] = useState(false);
  const [speaker, setSpeaker] = useState(true);
  const [like, setLike] = useState(false);
  const [random, setRandom] = useState(false);
  const [repeat, setRepeat] = useState(0);
  return (
    <div id="playing-bar">
      <div className="player-controls">
        <div className="level player-controls__container">
          <div className="player-controls-left level-left">
            <div className="level-item">
              <div className="media">
                <div className="media-left">
                  <a href="/">
                    <div className="thumbnail-wrapper">
                      <div className="thumbnail">
                        <figure className="thumbnail-image">
                          <img
                            src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/7/4/c/474cac41ad296fbdf93e84a4ed97c2a0.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="media-content">
                  <h3 className="media-content-song-info">
                    <a href="/">Văn Sơn</a>
                  </h3>
                  <span className="media-content-song-subtitle">
                    <a href="/">Văn Sơn</a>
                  </span>
                </div>

                <div className="media-right">
                  <i
                    style={{
                      color: like ? "red" : "#fff",
                    }}
                    onClick={() => {
                      setLike(!like);
                    }}
                  >
                    {like ? <AiFillHeart /> : <AiOutlineHeart />}
                  </i>
                  <i>
                    <BsThreeDots />
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="player-controls-center">
            <div className="player-controls-wrapper">
              <div className="player-controls-actions">
                <button
                  className={
                    random
                      ? "player-controls-actions-icon active can-bang button-hover"
                      : "player-controls-actions-icon can-bang button-hover"
                  }
                  onClick={() => {
                    setRandom(!random);
                  }}
                >
                  <i>
                    <FaRandom />
                  </i>
                </button>

                <button className="player-controls-actions-icon fz-40">
                  <i className="svg-hover">
                    <BiSkipPrevious />
                  </i>
                </button>

                <button
                  className="player-controls-actions-icon pause-icon fz-40"
                  onClick={() => {
                    setPlay(!play);
                  }}
                >
                  <i>{play ? <BsPlayCircle /> : <FiPauseCircle />}</i>
                </button>
                <button className="player-controls-actions-icon fz-40">
                  <i className="svg-hover">
                    <BiSkipNext />
                  </i>
                </button>
                <button
                  className={
                    repeat > 0
                      ? "player-controls-actions-icon can-bang active button-hover"
                      : "player-controls-actions-icon can-bang button-hover"
                  }
                  onClick={() => {
                    setRepeat((repeat + 1) % 3);
                  }}
                >
                  <i>{repeat < 2 ? <TbRepeat /> : <TbRepeatOnce />}</i>
                </button>
              </div>
              <div className="player-mar">
                <span className="player-time left">01.32</span>
                <div className="duration-bar">
                  <div
                    className="duration-bar-slider"
                    style={{
                      borderRadius: "4px",
                      background:
                        "linear-gradient(to right, var(--progressbar-active-bg) 0%, var(--progressbar-active-bg) 31.3522%, var(--progressbar-player-bg) 31.3522%, var(--progressbar-player-bg) 100%)",
                      alignSelf: "center",
                    }}
                  >
                    <div
                      tabIndex={0}
                      aria-valuemax="179.644082"
                      aria-valuemin={0}
                      aria-valuenow="56.32231"
                      draggable="false"
                      role="slider"
                      className="duration-bar-slider__handle"
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "var(--progressbar-active-bg)",
                        transform: "translate(126.806px, -3.5px)",
                      }}
                    />
                  </div>
                </div>
                <span className="player-time right">03:26</span>
              </div>
            </div>
          </div>

          <div className="player-controls-right">
            <button>
              <i>
                <GiMicrophone />
              </i>
            </button>
            <button>
              <i>
                <BiWindows />
              </i>
            </button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => {
                  setSpeaker(!speaker);
                }}
              >
                <i>{speaker ? <RxSpeakerLoud /> : <RxSpeakerOff />}</i>
              </button>
              <div className="volumn-duration-bar">
                <div className="volumn-slider-bar">
                  <div
                    tabIndex={0}
                    aria-valuemax={100}
                    aria-valuemin={0}
                    aria-valuenow={30}
                    draggable="false"
                    role="slider"
                    className="volumn-slider-handle"
                  />
                </div>
              </div>
            </div>
            <span className="player-controls-divide"></span>
            <button>
              <i>
                <BsMusicNoteList />
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Playingbar);