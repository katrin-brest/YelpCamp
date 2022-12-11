const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.menu__close-btn');
const body = document.querySelector('body')
const burger = document.querySelector('.burger');


burger.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(burger.classList.contains('burger_open')) {
    closeMenu()
  } else {
    openMenu()
  }
}

function openMenu() {
  menu.classList.add('active')
  body.classList.add('no-scroll')
  burger.classList.add('burger_open')

}

closeBtn.addEventListener('click', closeMenu) 

function closeMenu () {
  menu.classList.remove('active')
  burger.classList.remove('burger_open')
  body.classList.remove('no-scroll')
}