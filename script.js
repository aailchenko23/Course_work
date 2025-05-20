const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", function () {
  if (window.innerWidth <= 1300) {
    menu.classList.toggle("active");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 1300) {
    menu.classList.remove("active");
  }
});
