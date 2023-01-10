const openNavButton = document.querySelector("#open-nav");
const closeNavButton = document.querySelector("#close-nav");
const nav = document.querySelector("#header-nav");

openNavButton.addEventListener("click", function () {
  nav.classList.toggle("hiden");
  nav.classList.add("appear");
});

closeNavButton.addEventListener("click", function () {
  nav.classList.toggle("hiden");
  nav.classList.remove("appear");
});