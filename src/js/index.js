document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerMenu.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });

    const linksMobileMenu = document.querySelectorAll('.nav__link');
  linksMobileMenu.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      hamburgerMenu.classList.remove('active');
    });
  });
});