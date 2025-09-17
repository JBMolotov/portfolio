// Vinyl Projects Animatio// No need for spin animation
document.addEventListener("DOMContentLoaded", function () {
  // Get all vinyl boxes
  const vinylBoxes = document.querySelectorAll(".vinyl-box");

  // Add hover effect to each vinyl box
  vinylBoxes.forEach((box) => {
    const vinylSleeve = box.querySelector(".vinyl-sleeve");

    // Mouse enter effect
    box.addEventListener("mouseenter", function () {
      if (vinylSleeve) {
        vinylSleeve.style.transition = "all 0.8s ease";
        vinylSleeve.style.transform =
          "translateX(10px) rotateY(-15deg) translateZ(40px)";
      }
    });

    // Mouse leave effect
    box.addEventListener("mouseleave", function () {
      if (vinylSleeve) {
        vinylSleeve.style.transform =
          "translateX(-20px) rotateY(-5deg) translateZ(20px)";
      }
    });
  });
});

// Add spin animation to the stylesheet
const style = document.createElement("style");
style.innerHTML = `
  @keyframes spinVinyl {
    from { transform: translateY(-50%) rotate(0deg); }
    to { transform: translateY(-50%) rotate(360deg); }
  }
`;
document.head.appendChild(style);
