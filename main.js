const selectElement = (s) => document.querySelector(s);

const navLinks = document.querySelectorAll('.nav-link');

const menuIcon = document.getElementById('menu');

selectElement('.menu-icon').addEventListener('click', () => {
  selectElement('.nav-list').classList.toggle('active');

  if (menuIcon.className == 'fas fa-bars fa-3x') {
    menuIcon.className = 'fas fa-times fa-3x';
  } else if (menuIcon.className == 'fas fa-times fa-3x') {
    menuIcon.className = 'fas fa-bars fa-3x';
  }

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkAnimate 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
      console.log(index / 7 + 0.5);
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    selectElement('.nav-list').classList.toggle('active');
    if (menuIcon.className == 'fas fa-bars fa-3x') {
      menuIcon.className = 'fas fa-times fa-3x';
    } else if (menuIcon.className == 'fas fa-times fa-3x') {
      menuIcon.className = 'fas fa-bars fa-3x';
    }
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkAnimate 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
        console.log(index / 7 + 0.5);
      }
    });
  });
});
