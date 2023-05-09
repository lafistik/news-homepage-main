// VARIABLES

const body = document.querySelector("body");
const btnMobile = document.querySelector(".btn-mobile-nav");
const btnClosed = document.querySelector(".icon-closed");
const btnOpened = document.querySelector(".icon-opened");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const menuEl = document.querySelectorAll(".menu-el");

// OPEN/CLOSE menu on click

btnMobile.addEventListener("click", function () {
  overlay.classList.toggle("show");
  btnClosed.classList.toggle("show");
  btnOpened.classList.toggle("show");
  body.classList.toggle("active");
  menu.classList.toggle("active");
});

// CLOSE menu on click on menu element

menuEl.forEach((el) => {
  el.addEventListener("click", closeMenu);
});

// CLOSE menu on click away

overlay.addEventListener("click", closeMenu);

// CLOSE menu function

function closeMenu() {
  btnOpened.classList.remove("show");
  btnClosed.classList.add("show");
  overlay.classList.remove("show");
  body.classList.remove("active");
  menu.classList.remove("active");
}
