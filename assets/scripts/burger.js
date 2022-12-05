const menu = document.querySelector('.menu');
const menuBg = document.querySelector('.menu__bg');
const closeBtn = document.querySelector('.menu__close-btn');
const body = document.querySelector('body')
const burger = document.querySelector('.burger');


burger.addEventListener('click', openMenu);

function openMenu() {
  menu.classList.add('active')
  menuBg.classList.add('active')
  body.classList.add('no-scroll')

}

closeBtn.addEventListener('click', closeMenu) 

function closeMenu () {
  menu.classList.remove('active')
  menuBg.classList.remove('active')
  body.classList.remove('no-scroll')
}