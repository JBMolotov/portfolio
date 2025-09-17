// Retro Poster Effects & Interactions

document.addEventListener("DOMContentLoaded", function () {
  // Rotate posters slightly on hover
  const retroPosters = document.querySelectorAll(".retro-poster");

  retroPosters.forEach((poster) => {
    poster.addEventListener("mouseover", function () {
      const randomRotate = Math.random() * 2 - 1; // Random between -1 and 1
      poster.style.transform = `rotate(${randomRotate}deg)`;
    });

    poster.addEventListener("mouseout", function () {
      poster.style.transform = "rotate(-1deg)";
    });
  });

  // Add wood grain movement effect on scroll
  const woodPanels = document.querySelectorAll(".wood-panel-bg");

  window.addEventListener("scroll", function () {
    woodPanels.forEach((panel) => {
      const scrollPosition = window.scrollY;
      const offset = panel.offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollPosition + windowHeight > offset) {
        const shift = (scrollPosition - offset) / 10;
        panel.style.backgroundPosition = `${shift}px 0`;
      }
    });
  });

  // Add interactive elements to retro badges
  const retroBadges = document.querySelectorAll(".retro-badge");

  retroBadges.forEach((badge) => {
    badge.addEventListener("mouseover", function () {
      badge.style.transform = "rotate(2deg) scale(1.05)";
      badge.style.boxShadow = "5px 5px 0 var(--wood-dark)";
    });

    badge.addEventListener("mouseout", function () {
      badge.style.transform = "rotate(-2deg) scale(1)";
      badge.style.boxShadow = "3px 3px 0 var(--wood-dark)";
    });

    badge.addEventListener("click", function () {
      // Add a quick "press" effect
      badge.style.transform = "rotate(0deg) scale(0.95)";
      badge.style.boxShadow = "1px 1px 0 var(--wood-dark)";

      setTimeout(() => {
        badge.style.transform = "rotate(-2deg) scale(1)";
        badge.style.boxShadow = "3px 3px 0 var(--wood-dark)";
      }, 150);
    });
  });

  // Create retro pattern animation
  const retroPatterns = document.querySelectorAll(".retro-pattern-circle");

  retroPatterns.forEach((pattern, index) => {
    // Set different animation for each circle
    const delay = index * 2;
    const duration = 10 + index * 5;

    pattern.style.animation = `pulse ${duration}s ease-in-out ${delay}s infinite alternate`;
  });

  // Adicionando um elemento de estilo diretamente ao invés de tentar acessar styleSheets
  // isso evita o erro de segurança com cssRules
  const styleElement = document.createElement("style");
  styleElement.textContent = `
        @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
            100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.3; }
        }
    `;
  document.head.appendChild(styleElement);
});
