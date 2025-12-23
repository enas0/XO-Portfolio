/* =========================================================
   XO FOR SOFTWARE — Optimized Main JS
   Clean, smooth, responsive, and bug-free
========================================================= */

/* =============== MOBILE NAV TOGGLE =============== */
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

g
/* =============== SMOOTH SCROLLING FIXED =============== */
const navLinks = document.querySelectorAll(".nav-link, .header-cta, .footer-nav a, .logo");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");

    // If it's a real anchor
    if (targetId.startsWith("#")) {
      const section = document.querySelector(targetId);
      if (!section) return;

      e.preventDefault();

      // Close nav on mobile when selecting a link
      mainNav.classList.remove("open");

      // SPECIAL: Footer should scroll EXACTLY into view
      if (targetId === "#contact") {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      } 
      else if (targetId === "#home") {
        // Home must scroll to exact top (no offset)
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        // All other sections scroll with no offset
        window.scrollTo({
          top: section.offsetTop - 60,
          behavior: "smooth"
        });
      }
    }
  });
});


/* =============== SCROLL TO TOP BUTTON =============== */
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


/* =============== SLIDERS (TEAM + PROJECTS) =============== */
const sliderButtons = document.querySelectorAll(".slider-arrow");

sliderButtons.forEach(button => {
  button.addEventListener("click", () => {
    const trackId = button.dataset.target;
    const track = document.getElementById(trackId);

    const scrollAmount = 344; // Smooth and clean movement

    if (button.classList.contains("next")) {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  });
});


/* =============== ACTIVE NAV LINK ON SCROLL =============== */
const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".main-nav a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (scrollPos >= top && scrollPos <= top + height) {
      navigationLinks.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`.main-nav a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
});

/* ========== ACHIEVEMENT SLIDER (FIXED) ========== */
const achTrack = document.getElementById("achTrack");
const achPrev = document.getElementById("achPrev");
const achNext = document.getElementById("achNext");

let achIndex = 0;

function updateAchSlider() {
  const card = achTrack.querySelector(".achievement-card");
  const cardWidth = card.offsetWidth + 40; // card width + gap EXACT SIZE from CSS
  achTrack.style.transform = `translateX(-${achIndex * cardWidth}px)`;
}

achNext.addEventListener("click", () => {
  const total = achTrack.children.length;
  if (achIndex < total - 1) achIndex++;
  updateAchSlider();
});

achPrev.addEventListener("click", () => {
  if (achIndex > 0) achIndex--;
  updateAchSlider();
});

window.addEventListener("resize", updateAchSlider);

/* =========================================================
   TEAM SLIDER — CONTINUOUS SMOOTH AUTO SLIDE
========================================================= */

const teamTrack = document.getElementById("teamTrack");
const teamPrev = document.getElementById("teamPrevBtn");
const teamNext = document.getElementById("teamNextBtn");

if (teamTrack && teamPrev && teamNext) {

  let currentX = 0;
  let targetX = 0;
  let slideSpeed = 0.12;   // Lower = smoother
  let autoSpeed = 0.8;     // Auto sliding pixels per frame
  let animationFrame;

  function getStepWidth() {
    const cards = teamTrack.querySelectorAll(".team-card");
    if (cards.length < 2) return 260;

    return cards[1].offsetLeft - cards[0].offsetLeft;
  }

  function getMaxOffset() {
    const totalCards = teamTrack.children.length;
    const step = getStepWidth();
    const wrapperWidth = teamTrack.parentElement.offsetWidth;

    return totalCards * step - wrapperWidth;
  }

  function animate() {
    currentX += (targetX - currentX) * slideSpeed;
    teamTrack.style.transform = `translateX(-${currentX}px)`;
    animationFrame = requestAnimationFrame(animate);
  }

  function autoSlide() {
    targetX += autoSpeed;

    const maxOffset = getMaxOffset();
    if (targetX > maxOffset) {
      targetX = 0;   // Loop back smoothly
      currentX = 0;
    }
  }

  // Arrows still work
  teamNext.addEventListener("click", () => {
    targetX += getStepWidth();
  });

  teamPrev.addEventListener("click", () => {
    targetX -= getStepWidth();
    if (targetX < 0) targetX = 0;
  });

  // Start animation
  animate();
  setInterval(autoSlide, 16);  // ~60 FPS
}

window.addEventListener("load", () => {
  const preload = document.querySelector(".preloader");
  const site = document.querySelector(".site-content");

  setTimeout(() => {
    preload.style.display = "none";
    site.style.opacity = "1";
  }, 3000); // must match animation-delay
});

// ================= TEAM MEMBER PROFILE NAVIGATION =================
const teamTrackEl = document.getElementById("teamTrack");

if (teamTrackEl) {
  teamTrackEl.addEventListener("click", (e) => {
    const card = e.target.closest(".team-card");
    if (!card) return;

    const memberId = card.dataset.member;
    if (!memberId) return;

    window.location.href = `team-member.html?id=${encodeURIComponent(memberId)}`;
  });

  teamTrackEl.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".team-card");
    if (!card) return;

    const memberId = card.dataset.member;
    if (!memberId) return;

    e.preventDefault();
    window.location.href = `team-member.html?id=${encodeURIComponent(memberId)}`;
  });
}
