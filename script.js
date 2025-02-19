

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

  // /Scroll reveal
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 1000,
  delay: 50,
});
ScrollReveal().reveal('.desktop-nav, .contact', {origin: 'top'});
ScrollReveal().reveal('.section__pic-container', {origin: 'left'});
ScrollReveal().reveal('.section__text', {origin: 'right'});
ScrollReveal().reveal('.about-containers, .text-container, .nav-links', {origin: 'bottom'});
