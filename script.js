// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// mobile nav
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // close menu on link click (mobile)
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("active"));
  });
}

// Dynamic hero background - parallax and mouse movement effects
const heroBg = document.querySelector('.hero-bg');
const hero = document.getElementById('hero');

if (heroBg && hero) {
  let scrollOffset = 0;
  let mouseX = 0;
  let mouseY = 0;
  
  // Parallax on scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;
    scrollOffset = Math.min(scrollY / heroHeight, 1);
    updateTransform();
  });

  // Mouse movement parallax effect
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    updateTransform();
  });

  hero.addEventListener('mouseleave', () => {
    mouseX = 0;
    mouseY = 0;
    updateTransform();
  });

  function updateTransform() {
    const scrollY = scrollOffset * 30;
    const scale = 1 + scrollOffset * 0.05;
    heroBg.style.transform = `translate(${mouseX}px, ${scrollY + mouseY}px) scale(${scale})`;
  }
}
