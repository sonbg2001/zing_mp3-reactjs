function Player() {
  return (
    <div
      className="--z--player"
      data-player
      tabIndex={1}
      style={{ width: 0, height: 0 }}
    >
      <audio
        data-html5-video
        preload="auto"
        onPlay={true}
        src="https://mp3-320s1-zmp3.zmdcdn.me/a7b00f664f26a678ff37/4867814653821791479?authen=exp=1676106545~acl=/a7b00f664f26a678ff37/*~hmac=5fb0fb4b26f7343e6edc5d33409e78a3&fs=MTY3NTkzMzmUsIC0NTmUsICzNXx3ZWJWNnwwfDQyLjExNS45Ny4xMzE"
      />
    </div>
  );
}

export default Player;
