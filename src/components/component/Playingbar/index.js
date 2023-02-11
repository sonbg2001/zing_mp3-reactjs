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
import { Link } from "react-router-dom";
// import Player from "../Player";

function Playingbar() {
  const [play, setPlay] = useState(false);
  const [speaker, setSpeaker] = useState(true);
  const [like, setLike] = useState(false);
  const [random, setRandom] = useState(false);
  const [repeat, setRepeat] = useState(0);
  const listAudio = [
    {
      songName: "Bai hat 1",
      songPath: "./assets/musics/song1.mp3",
      author: "Son Van 1",
      image: "https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg",
    },
    {
      songName: "Bai hat 2",
      songPath: "./assets/musics/song2.mp3",
      author: "Son Van 2",
      image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/d/2/5/ed251cf560be4747e7737b535c357f07.jpg",
    },
    {
      songName: "Bai hat 3",
      songPath: "./assets/musics/song3.mp3",
      author: "Son Van 3",
      image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/6/1/6/76167d27268546570f7fa21d8c708ad2.jpg",
    },
    {
      songName: "Bai hat 4",
      songPath: "./assets/musics/song4.mp3",
      author: "Son Van 4",
      image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/f/d/8/6fd8a0ae2ef979a2e77d67dde5c8c91c.jpg",
    },
    {
      songName: "Bai hat 5",
      songPath: "./assets/musics/song5.mp3",
      author: "Son Van 5",
      image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/9/e/9/b9e90901695dd29b9622a8d91322d986.jpg",
    },
  ];
  const [currentSong, setCurrentSong] = useState(0);

  const [audio] = useState(new Audio(listAudio[currentSong].songPath));
  const [currentTime, setCurrentTime] = useState(0);

  // FormatTime
  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  }

  function updateAudioSource() {
    console.log("update song");
    audio.src = listAudio[currentSong].songPath;
    audio.load();
  }

  function nextSong() {
    console.log("next song");

    if (random) {
      console.log("random song");

      setCurrentSong(Math.floor(Math.random() * listAudio.length));
      updateAudioSource();
    } else if (repeat === 1) {
      console.log("repeat song");

      setCurrentSong((currentSong + 1) % listAudio.length);
    }

    updateAudioSource();
  }

  useEffect(() => {
    console.log("currentSong: ", currentSong);
    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.currentTime > 0.99 * audio.duration) {
        console.log("end song");
        nextSong();
      }
    };

    audio.muted = !speaker;
    if (play) audio.play();
    else audio.pause();

    return () => {
      if (audio) {
        audio.pause(); // to enable garbage collection
      }
    };
    // eslint-disable-next-line
  }, [play, speaker, currentSong]);
  return (
    <div id="playing-bar">
      <div className="player-controls">
        <div className="level player-controls__container">
          <div className="player-controls-left level-left">
            <div className="level-item">
              <div className="media">
                <div className="media-left">
                  <Link to="/">
                    <div className="thumbnail-wrapper">
                      <div className="thumbnail">
                        <figure className="thumbnail-image">
                          <img
                            src={listAudio[currentSong].image}
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="media-content">
                  <h3 className="media-content-song-info">
                    <Link to="/">{listAudio[currentSong].songName}</Link>
                  </h3>
                  <span className="media-content-song-subtitle">
                    <Link to="/">{listAudio[currentSong].author}</Link>
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

                <button
                  className="player-controls-actions-icon fz-40"
                  onClick={() => {
                    setCurrentSong(
                      (currentSong + listAudio.length - 1) % listAudio.length
                    );
                    updateAudioSource();
                  }}
                >
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
                <button
                  className="player-controls-actions-icon fz-40"
                  onClick={() => {
                    setCurrentSong((currentSong + 1) % listAudio.length);
                    updateAudioSource();
                  }}
                >
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
                      className="cowbell"
                      name="cowbell"
                      min="0"
                      max="100"
                      value={
                        "" + (audio.currentTime * 100) / audio.duration || "0"
                      }
                      step="10"
                      style={{
                        width: `${
                          document.querySelector(".duration-bar") &&
                          document.querySelector(".duration-bar").offsetWidth
                        }px`,
                        height: "3px",
                        cursor: "pointer",
                      }}
                      onChange={(e) => {
                        audio.currentTime =
                          (e.target.value * audio.duration) / 100;
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
                    background: `linear-gradient(to right, var(--progressbar-active-bg) 0%, var(--progressbar-active-bg) ${
                      audio.volume * 100
                    }%, var(--progressbar-player-bg) 0%, var(--progressbar-player-bg) 100%  )`,
                    alignSelf: "center",
                    width: "100%",
                    height: "3px",
                  }}
                >
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
                      // transform: `translate(47.6116px, -3.5px)`,
                      transform: `translate(${
                        document.querySelector(".volumn-slider-bar") &&
                        audio.volume *
                          document.querySelector(".volumn-slider-bar")
                            .offsetWidth
                      }px, -3.5px)`,
                    }}
                  />
                  <input
                    type="range"
                    className="cowbell"
                    name="cowbell"
                    min="0"
                    max="100"
                    value={"" + audio.volume * 100 || "0"}
                    step="10"
                    style={{
                      width: `${
                        document.querySelector(".volumn-slider-bar") &&
                        document.querySelector(".volumn-slider-bar").offsetWidth
                      }px`,
                      height: "3px",
                      cursor: "pointer",
                      position: "absolute",
                      top: "44px",
                    }}
                    onChange={(e) => {
                      if (audio.volume <= 0 && speaker) setSpeaker(false);
                      else setSpeaker(true);

                      audio.volume = e.target.value / 100;
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
