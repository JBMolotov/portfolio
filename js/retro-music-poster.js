// Retro Music Poster Animation Effects
document.addEventListener("DOMContentLoaded", function () {
  // Get retro elements
  const retroCassette = document.querySelector(".retro-cassette-container");
  const retroReels = document.querySelectorAll(".retro-reel");
  const retroTitle = document.querySelector(".retro-large");

  // Add hover effect to cassette
  if (retroCassette) {
    retroCassette.addEventListener("mouseenter", function () {
      this.style.transform = "rotate(8deg) scale(1.03)";
      this.style.transition = "all 0.5s ease";
    });

    retroCassette.addEventListener("mouseleave", function () {
      this.style.transform = "rotate(10deg) scale(1)";
    });
  }

  // Animate title on scroll
  window.addEventListener("scroll", function () {
    if (retroTitle) {
      const scrollPosition = window.scrollY;
      const contactSection = document.querySelector(".retro-music-contact");

      if (contactSection) {
        const sectionTop = contactSection.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition + windowHeight > sectionTop) {
          const scrollFactor = Math.min(
            1,
            (scrollPosition + windowHeight - sectionTop) / windowHeight
          );

          retroTitle.style.transform = `perspective(500px) rotateX(${
            10 - scrollFactor * 5
          }deg) scale(${1 + scrollFactor * 0.1})`;
          retroTitle.style.opacity = Math.min(1, scrollFactor * 2);
        }
      }
    }
  });

  // Add some random movement to the reels
  if (retroReels.length > 0) {
    setInterval(() => {
      const speeds = ["4s", "5s", "6s", "7s", "8s"];
      const randomSpeed = speeds[Math.floor(Math.random() * speeds.length)];

      retroReels.forEach((reel) => {
        reel.style.animationDuration = randomSpeed;
      });
    }, 5000);
  }
});
