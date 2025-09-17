// Analog Controls Animation Script

document.addEventListener("DOMContentLoaded", function () {
  // VU Meter random movement
  function animateVUMeters() {
    const needles = document.querySelectorAll(".vu-needle");

    needles.forEach((needle) => {
      // Create random movement for VU meters that looks realistic
      setInterval(() => {
        const randomAngle = Math.random() * 60 - 30; // Random angle between -30 and 30 degrees
        needle.style.transform = `rotate(${randomAngle}deg)`;
      }, 300);
    });
  }

  // Interactive knob rotation
  function setupKnobs() {
    const knobs = document.querySelectorAll(".knob");

    knobs.forEach((knob) => {
      knob.addEventListener("mousedown", function (e) {
        const knobRect = knob.getBoundingClientRect();
        const knobCenterX = knobRect.left + knobRect.width / 2;
        const knobCenterY = knobRect.top + knobRect.height / 2;

        function rotateKnob(e) {
          const mouseX = e.clientX;
          const mouseY = e.clientY;

          // Calculate angle between mouse position and knob center
          const angle =
            Math.atan2(mouseY - knobCenterY, mouseX - knobCenterX) *
            (180 / Math.PI);
          // Add 90 degrees to have 0 at top position
          const rotation = angle + 90;

          knob.style.transform = `rotate(${rotation}deg)`;
        }

        // Add mousemove event listener when mouse is down on knob
        document.addEventListener("mousemove", rotateKnob);

        // Remove mousemove event listener when mouse is up
        document.addEventListener(
          "mouseup",
          function () {
            document.removeEventListener("mousemove", rotateKnob);
          },
          { once: true }
        );
      });
    });
  }

  // Equalizer animation
  function animateEqualizer() {
    const eqBars = document.querySelectorAll(".eq-bar");

    setInterval(() => {
      eqBars.forEach((bar) => {
        const randomHeight = 5 + Math.random() * 30; // Random height between 5px and 35px
        bar.style.height = `${randomHeight}px`;
      });
    }, 150);
  }

  // Initialize all analog control animations
  animateVUMeters();
  setupKnobs();
  animateEqualizer();
});
