// Analog Effects Animation

document.addEventListener("DOMContentLoaded", function () {
  // Simulate tape playback with varying speed
  function simulateTapePlayback() {
    const reelLeft = document.querySelector(".reel-left");
    const reelRight = document.querySelector(".reel-right");

    // Simulate varying tape speed
    setInterval(() => {
      const randomSpeed = 3 + Math.random() * 8; // Random speed between 3s and 11s
      reelLeft.style.animationDuration = `${randomSpeed}s`;
      reelRight.style.animationDuration = `${randomSpeed}s`;

      // Simulate occasional tape flutter
      if (Math.random() > 0.7) {
        reelLeft.style.animationTimingFunction = "ease-in-out";
        reelRight.style.animationTimingFunction = "ease-in-out";

        setTimeout(() => {
          reelLeft.style.animationTimingFunction = "linear";
          reelRight.style.animationTimingFunction = "linear";
        }, 500);
      }
    }, 2000);
  }

  // Add occasional CRT flicker effect
  function addCrtFlicker() {
    const crtEffect = document.querySelector(".crt-effect");

    // Simulate occasional stronger flicker
    setInterval(() => {
      if (Math.random() > 0.7) {
        crtEffect.style.opacity = "0.4";

        setTimeout(() => {
          crtEffect.style.opacity = "0.15";
        }, 100);
      }
    }, 5000);
  }

  // Add tracking lines effect (horizontal distortion line)
  function addTrackingEffect() {
    const body = document.body;
    const trackingLine = document.createElement("div");

    trackingLine.style.position = "fixed";
    trackingLine.style.left = "0";
    trackingLine.style.width = "100%";
    trackingLine.style.height = "5px";
    trackingLine.style.background = "rgba(255,255,255,0.2)";
    trackingLine.style.boxShadow = "0 0 10px rgba(255,255,255,0.5)";
    trackingLine.style.pointerEvents = "none";
    trackingLine.style.zIndex = "1005";
    trackingLine.style.opacity = "0";

    body.appendChild(trackingLine);

    // Move tracking line randomly across screen
    setInterval(() => {
      if (Math.random() > 0.7) {
        const randomTop = Math.random() * window.innerHeight;
        trackingLine.style.top = `${randomTop}px`;
        trackingLine.style.opacity = "1";

        // Animate tracking line
        let pos = -100;
        const moveTrackingLine = setInterval(() => {
          pos += 10;
          trackingLine.style.transform = `translateX(${pos}vw)`;

          if (pos > window.innerWidth) {
            clearInterval(moveTrackingLine);
            trackingLine.style.opacity = "0";
          }
        }, 10);
      }
    }, 8000);
  }

  // Initialize analog effects
  simulateTapePlayback();
  addCrtFlicker();
  addTrackingEffect();
});
