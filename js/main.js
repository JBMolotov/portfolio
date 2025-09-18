// Analog Hi-Fi Portfolio - Johnny Silva

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Update active nav link
        document.querySelectorAll("nav a").forEach((navLink) => {
          navLink.classList.remove("active");
        });
        this.classList.add("active");
      }
    });
  });

  // Typewriter effect
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = [
    "Automação",
    "Inteligência Artificial",
    "Machine Learning",
    "Data Science",
    "Web Full Stack",
    "LLMs",
  ];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  if (textArray.length) setTimeout(type, newTextDelay + 250);

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll(
    ".skill-level, .project-card, .polaroid"
  );

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 150) {
        if (element.classList.contains("skill-level")) {
          // Animate skill level bars
          element.style.width =
            element.parentElement.previousElementSibling.lastElementChild.textContent;
        } else {
          // Add reveal class to other elements
          element.classList.add("revealed");
        }
      }
    });
  }

  // Initial check
  revealOnScroll();

  // Add event listener
  window.addEventListener("scroll", revealOnScroll);

  // Update active navigation on scroll
  function updateActiveNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);

  // Mobile: hide nav items on scroll down, show on scroll up (keep only logo)
  let lastScrollY = window.scrollY;
  const headerEl = document.querySelector("header");
  function toggleMobileNavVisibility() {
    const isMobile = window.matchMedia("(max-width: 480px)").matches;
    if (!headerEl || !isMobile) {
      if (headerEl) headerEl.classList.remove("hide-nav");
      return;
    }
    const currentY = window.scrollY;
    if (currentY > lastScrollY && currentY > 50) {
      // Scrolling down
      headerEl.classList.add("hide-nav");
    } else {
      // Scrolling up or near top
      headerEl.classList.remove("hide-nav");
    }
    lastScrollY = currentY;
  }

  window.addEventListener("scroll", toggleMobileNavVisibility, {
    passive: true,
  });
  window.addEventListener("resize", toggleMobileNavVisibility);
  toggleMobileNavVisibility();

  // Form submission handling
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you would typically send the form data to a server
      // For now, let's just simulate a successful submission

      const formData = new FormData(contactForm);
      let formValues = {};

      formData.forEach((value, key) => {
        formValues[key] = value;
      });

      console.log("Form submission:", formValues);

      // Reset the form
      contactForm.reset();

      // Show success message (in a real implementation)
      alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
    });
  }

  // Add focus effects to form fields
  const formInputs = document.querySelectorAll("input, textarea");

  formInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", () => {
      if (!input.value) {
        input.parentElement.classList.remove("focused");
      }
    });
  });

  // Analog VHS-style tracking lines effect
  function createTrackingLines() {
    const overlay = document.createElement("div");
    overlay.classList.add("tracking-lines");
    document.body.appendChild(overlay);

    setInterval(() => {
      const lines = Math.floor(Math.random() * 3) + 1;
      overlay.innerHTML = "";

      for (let i = 0; i < lines; i++) {
        const line = document.createElement("div");
        const position = Math.random() * 100;
        const height = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.2 + 0.1;

        line.style.top = `${position}%`;
        line.style.height = `${height}px`;
        line.style.opacity = opacity;

        overlay.appendChild(line);
      }
    }, 200);
  }

  // Uncomment to enable tracking lines effect
  // createTrackingLines();
});
