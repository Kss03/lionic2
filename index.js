console.log('eee');

let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__nav');
let navLinks = document.querySelectorAll('.header__nav .nav__link');

console.log(navLinks);

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  nav.classList.toggle('header__nav--active');
})

navLinks.forEach(function(elem) {
  elem.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    nav.classList.remove('header__nav--active');
  })
})