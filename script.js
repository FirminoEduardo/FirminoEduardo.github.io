document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. Ação de "Press Start" (Rolar a página)
  // ==========================================
  const heroSection = document.querySelector(".hero");
  const firstLevelSection = document.querySelector(".inventory-section");

  if (heroSection && firstLevelSection) {
    heroSection.style.cursor = "pointer";

    heroSection.addEventListener("click", (e) => {
      if (e.target.closest("#langToggle") || e.target.id === "secretName")
        return;

      firstLevelSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // ==========================================
  // 2. Sistema de Troca de Idioma (Bandeiras)
  // ==========================================
  const langToggle = document.getElementById("langToggle");
  const translatableElements = document.querySelectorAll("[data-pt]");
  let currentLang = "pt";

  const svgBrasil = `
        <svg id="flagIcon" width="48" height="36" viewBox="0 0 16 12" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style="border: 3px solid #FFF; box-shadow: 4px 4px 0px rgba(0,0,0,0.8); border-radius: 2px; display: block;">
            <rect width="16" height="12" fill="#009B3A" />
            <polygon points="8,1 14,6 8,11 2,6" fill="#FEDF00" />
            <rect x="6" y="4" width="4" height="4" fill="#002776" />
        </svg>
    `;

  const svgEUA = `
        <svg id="flagIcon" width="48" height="36" viewBox="0 0 16 12" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" style="border: 3px solid #FFF; box-shadow: 4px 4px 0px rgba(0,0,0,0.8); border-radius: 2px; display: block;">
            <rect width="16" height="12" fill="#B22234" />
            <rect y="1.5" width="16" height="1.5" fill="#FFFFFF" />
            <rect y="4.5" width="16" height="1.5" fill="#FFFFFF" />
            <rect y="7.5" width="16" height="1.5" fill="#FFFFFF" />
            <rect y="10.5" width="16" height="1.5" fill="#FFFFFF" />
            <rect width="8" height="6" fill="#3C3B6E" />
            <rect x="1" y="1" width="1" height="1" fill="#FFFFFF" />
            <rect x="3" y="1" width="1" height="1" fill="#FFFFFF" />
            <rect x="5" y="1" width="1" height="1" fill="#FFFFFF" />
            <rect x="2" y="3" width="1" height="1" fill="#FFFFFF" />
            <rect x="4" y="3" width="1" height="1" fill="#FFFFFF" />
            <rect x="6" y="3" width="1" height="1" fill="#FFFFFF" />
        </svg>
    `;

  if (langToggle) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();

      currentLang = currentLang === "pt" ? "en" : "pt";

      translatableElements.forEach((el) => {
        el.innerText =
          currentLang === "pt"
            ? el.getAttribute("data-pt")
            : el.getAttribute("data-en");
      });

      langToggle.innerHTML = currentLang === "pt" ? svgBrasil : svgEUA;

      langToggle.style.transform = "scale(0.9)";
      setTimeout(() => (langToggle.style.transform = "scale(1)"), 150);
    });
  }

  // ==========================================
  // 3. Easter Egg: Troféu de Platina
  // ==========================================
  const secretName = document.getElementById("secretName");
  const toast = document.getElementById("achievementToast");
  let clickCount = 0;
  let clickTimer;

  if (secretName && toast) {
    secretName.style.cursor = "crosshair";

    secretName.addEventListener("click", (e) => {
      e.stopPropagation();
      clickCount++;

      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => (clickCount = 0), 2000);

      if (clickCount === 5) {
        toast.classList.add("show-toast");
        setTimeout(() => toast.classList.remove("show-toast"), 5000);
        clickCount = 0;
      }
    });
  }

  // ==========================================
  // 4. Efeito de Descoberta do Mapa (Fade-in)
  // ==========================================
  const elementsToAnimate = document.querySelectorAll(
    ".level-card, .boss-card, .save-card, .inventory-slot",
  );

  if (elementsToAnimate.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-element");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    elementsToAnimate.forEach((el) => {
      el.classList.add("hidden-element");
      observer.observe(el);
    });
  }
});
