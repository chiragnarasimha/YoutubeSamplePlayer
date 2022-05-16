const playPauseBtn = document.querySelector(".play-pause-btn");
const video = document.querySelector("video");
const videoContainer = document.querySelector(".video-container");

document.addEventListener("keydown", (userKey) => {
  switch (userKey.key.toLowerCase()) {
    case " ":
    case "k":
      togglePlay();
      break;
  }
});

// The logic below will deal with the play pause of the video
function togglePlay() {
  video.paused ? video.play() : video.pause();
}

playPauseBtn.addEventListener("click", togglePlay);
video.addEventListener("play", () => {
  videoContainer.classList.remove("paused");
});

video.addEventListener("pause", () => {
  videoContainer.classList.add("paused");
});

video.addEventListener("click", togglePlay);
