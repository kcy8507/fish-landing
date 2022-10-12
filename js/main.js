let menu = document.querySelector(".mobile__nav-menu");
let menuBtn = document.querySelector(".nav__btn");
let closeBtn = document.querySelector(".nav__btn-cls");
const html = document.querySelector("html");
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  html.style.overflow = "hidden";
});
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  html.style.removeProperty("overflow");
});
