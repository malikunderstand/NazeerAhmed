let menu = document.querySelector("#navmenu");
let nav = document.querySelector("#menu");

menu.onclick = () => {
   menu.classList.toggle('bx-x');
    nav.classList.toggle('open');

}

const header = document.querySelector("#header");
window.addEventListener('scroll',() => {
    header.classList.add('sticky');


});