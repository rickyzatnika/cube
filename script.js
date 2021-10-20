const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navbar ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.querySelector('#navbar').style.top = '0';
  } else {
    document.querySelector('#navbar').style.top = '-150px';
  }
  prevScrollpos = currentScrollpos;
};

let icon = document.getElementById('icon');

localStorage.setItem('theme', 'light');

let localData = localStorage.getItem('theme');
if (localData == 'light') {
  icon.src = 'img/moon.png';
  document.body.classList.remove('dark-theme');
} else if (localData == 'dark') {
  icon.src = 'img.sun.png';
  document.body.classList.add('dark-theme');
}

icon.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = 'img/sun.png';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.src = 'img/moon.png';
    localStorage.setItem('theme', 'light');
  }
};

$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  dots: false,
});

// $('.main').tiltedpage_scroll({
//   sectionContainer: '> section',
//   angle: 50,
//   opacity: true,
//   scale: true,
//   outAnimation: true,
// });
