/* Открытие-закрытие мобильного меню*/
var button = document.querySelector(".menu-toggle");
var menu = document.querySelector(".main-nav__list");
var gallery = document.querySelector(".main-nav__link--disabled");
var submenu = document.querySelector(".sub-menu");

if (button) {
button.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("main-nav__list--closed");
  });
}

if (gallery) {
gallery.addEventListener("click", function(event) {
  event.preventDefault();
  submenu.classList.toggle("sub-menu--opened");
  });
}
