import { memo, useEffect, useState } from "react";
import "./Playingbar.scss";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious, BiWindows } from "react-icons/bi";
import { BsThreeDots, BsPlayCircle, BsMusicNoteList } from "react-icons/bs";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";

import { GiMicrophone } from "react-icons/gi";
import { TbRepeat, TbRepeatOnce } from "react-icons/tb";
import { FaRandom } from "react-icons/fa";
import { FiPauseCircle } from "react-icons/fi";
// import Player from "../Player";

function Playingbar() {
  const [play, setPlay] = useState(false);
  const [speaker, setSpeaker] = useState(true);
  const [like, setLike] = useState(false);
  const [random, setRandom] = useState(false);
  const [repeat, setRepeat] = useState(0);
  const [audio] = useState(
    new Audio(
      "https://vnso-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/a7b00f664f26a678ff37/4867814653821791479?authen=exp=1676106545~acl=/a7b00f664f26a678ff37/*~hmac=5fb0fb4b26f7343e6edc5d33409e78a3&fs=MTY3NTkzMzmUsIC0NTmUsICzNXx3ZWJWNnwwfDQyLjExNS45Ny4xMzE"
    )
  );
  const [currentTime, setCurrentTime] = useState(0);

  // FormatTime
  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  }

  useEffect(() => {
    if (play) audio.play();
    else audio.pause();
    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.muted = !speaker;
    return () => {
      if (audio) {
        audio.pause(); // to enable garbage collection
      }
    };
    // eslint-disable-next-line
  }, [play, speaker]);
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
                  <i>{!play ? <BsPlayCircle /> : <FiPauseCircle />}</i>
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
                <span className="player-time left">
                  {currentTime ? formatTime(currentTime) : "00:00"}
                </span>
                <div className="duration-bar">
                  <div
                    className="duration-bar-slider"
                    style={{
                      borderRadius: "4px",
                      background: `linear-gradient(to right, var(--progressbar-active-bg) 0%, var(--progressbar-active-bg) ${
                        (audio.currentTime / audio.duration) * 100
                      }%, var(--progressbar-player-bg) 0%, var(--progressbar-player-bg) 100%)`,
                      alignSelf: "center",
                    }}
                   
                  >
                    <input
                      type="range"
                      id="cowbell"
                      name="cowbell"
                      min="0"
                      max="100"
                      value={""+ (audio.currentTime * 100) / audio.duration || "0"}
                      step="10"
                      style={{
                        width: `${document.querySelector(".duration-bar") && document.querySelector(".duration-bar").offsetWidth}px`,
                        height: "3px",
                        cursor: "pointer",
                        
                      }}
                      onChange={(e) => {
                        audio.currentTime = e.target.value *  audio.duration /100;
                      }}
                    />
                    <div
                      tabIndex={0}
                      aria-valuemax={audio.duration}
                      aria-valuemin={0}
                      aria-valuenow={audio.currentTime}
                      draggable="false"
                      role="slider"
                      className="duration-bar-slider__handle"
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "var(--progressbar-active-bg)",
                        transform: `translate(${
                          document.querySelector(".duration-bar") &&
                          (audio.currentTime / audio.duration) *
                            document.querySelector(".duration-bar").offsetWidth
                        }px, -6.5px)`,
                      }}
                    />
                  </div>
                </div>
                <span className="player-time right">
                  {audio.duration ? formatTime(audio.duration) : "00:00"}
                </span>
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
                <div
                  className="volumn-slider-bar"
                  style={{
                    borderRadius: "4px",
                    background:
                      "linear-gradient(to right, var(--progressbar-active-bg) 0%, var(--progressbar-active-bg) 30%, var(--progressbar-player-bg) 30%, var(--progressbar-player-bg) 100%  )",
                    alignSelf: "center",
                    width: "100%",
                    height: "3px",
                  }}
                >
                <input
                      type="range"
                      // id="cowbell"
                      name="cowbell"
                      min="0"
                      max="100"
                      value={""+ (audio.currentTime * 100) / audio.duration || "0"}
                      step="10"
                      style={{
                        width: `${document.querySelector(".volumn-duration-bar") && document.querySelector(".volumn-duration-bar").offsetWidth}px`,
                        height: "3px",
                        cursor: "pointer",
                        opacity: "0.5",
                        // display: "none",
                      }}
                      onChange={(e) => {
                        audio.currentTime = e.target.value *  audio.duration /100;
                      }}
                    />
                  <div
                    tabIndex={0}
                    aria-valuemax={100}
                    aria-valuemin={0}
                    aria-valuenow={100}
                    draggable="false"
                    role="slider"
                    className="volumn-slider-handle"
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "var(--progressbar-active-bg)",
                      transform: `translate(47.6116px, -3.5px)`,
                    }}
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

      {/* <Player /> */}
    </div>
  );
}

export default memo(Playingbar);
