// Cassette Player Interaction
document.addEventListener("DOMContentLoaded", function () {
  // Get all cassette player buttons
  const buttons = document.querySelectorAll(".cassette-buttons .button");
  const playButton = document.querySelector(".play-button");
  const stopButton = document.querySelector(".stop-button");
  const pauseButton = document.querySelector(".pause-button");
  const rewindButton = document.querySelector(".rewind-button");
  const forwardButton = document.querySelector(".forward-button");
  const equalizer = document.querySelectorAll(".eq-bar");
  const leftReel = document.querySelector(".left-reel");
  const rightReel = document.querySelector(".right-reel");

  // State tracking
  let isPlaying = false;
  let isPaused = false;

  // Play button functionality
  if (playButton) {
    playButton.addEventListener("click", function () {
      isPlaying = true;
      isPaused = false;

      // Active button effect
      resetButtons();
      this.style.background = "var(--primary)";
      this.style.color = "var(--secondary)";

      // Animate equalizer
      equalizer.forEach((bar) => {
        bar.style.animationPlayState = "running";
      });

      // Animate reels
      if (leftReel) leftReel.style.animationPlayState = "running";
      if (rightReel) rightReel.style.animationPlayState = "running";
    });
  }

  // Pause button functionality
  if (pauseButton) {
    pauseButton.addEventListener("click", function () {
      if (isPlaying) {
        isPaused = !isPaused;

        if (isPaused) {
          // Active button effect
          resetButtons();
          this.style.background = "var(--primary)";
          this.style.color = "var(--secondary)";

          // Pause animations
          equalizer.forEach((bar) => {
            bar.style.animationPlayState = "paused";
          });
          if (leftReel) leftReel.style.animationPlayState = "paused";
          if (rightReel) rightReel.style.animationPlayState = "paused";
        } else {
          // Resume playing
          resetButtons();
          playButton.style.background = "var(--primary)";
          playButton.style.color = "var(--secondary)";

          // Resume animations
          equalizer.forEach((bar) => {
            bar.style.animationPlayState = "running";
          });
          if (leftReel) leftReel.style.animationPlayState = "running";
          if (rightReel) rightReel.style.animationPlayState = "running";
        }
      }
    });
  }

  // Stop button functionality
  if (stopButton) {
    stopButton.addEventListener("click", function () {
      isPlaying = false;
      isPaused = false;

      // Active button effect
      resetButtons();
      this.style.background = "var(--primary)";
      this.style.color = "var(--secondary)";

      // Stop animations
      equalizer.forEach((bar) => {
        bar.style.animationPlayState = "paused";
        bar.style.height = "10%";
      });
      if (leftReel) leftReel.style.animationPlayState = "paused";
      if (rightReel) rightReel.style.animationPlayState = "paused";
    });
  }

  // Rewind button functionality - visual effect only
  if (rewindButton) {
    rewindButton.addEventListener("click", function () {
      resetButtons();
      this.style.background = "var(--primary)";
      this.style.color = "var(--secondary)";

      if (leftReel) leftReel.style.animationDirection = "reverse";
      if (rightReel) rightReel.style.animationDirection = "normal";
      if (leftReel) leftReel.style.animationPlayState = "running";
      if (rightReel) rightReel.style.animationPlayState = "running";

      // Return to normal after 2 seconds
      setTimeout(() => {
        if (leftReel) leftReel.style.animationDirection = "normal";
        if (rightReel) rightReel.style.animationDirection = "reverse";
        resetButtons();
      }, 2000);
    });
  }

  // Forward button functionality - visual effect only
  if (forwardButton) {
    forwardButton.addEventListener("click", function () {
      resetButtons();
      this.style.background = "var(--primary)";
      this.style.color = "var(--secondary)";

      if (leftReel) leftReel.style.animationPlayState = "running";
      if (rightReel) rightReel.style.animationPlayState = "running";
      if (leftReel) leftReel.style.animationDuration = "1s";
      if (rightReel) rightReel.style.animationDuration = "1s";

      // Return to normal after 2 seconds
      setTimeout(() => {
        if (leftReel) leftReel.style.animationDuration = "8s";
        if (rightReel) rightReel.style.animationDuration = "8s";
        resetButtons();
      }, 2000);
    });
  }

  // Helper function to reset all buttons to default state
  function resetButtons() {
    buttons.forEach((btn) => {
      btn.style.background = "";
      btn.style.color = "";
    });
  }

  // Start with play button active
  if (playButton) {
    setTimeout(() => {
      playButton.click();
    }, 1000);
  }
});
