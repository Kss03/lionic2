let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__nav');
let navLinks = document.querySelectorAll('.header__nav .nav__link');
let body = document.querySelector('body');

console.log(body);

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  nav.classList.toggle('header__nav--active');
  body.classList.toggle('display--block');
})

navLinks.forEach(function(elem) {
  elem.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    nav.classList.remove('header__nav--active');
    body.classList.remove('display--block');
  })
})