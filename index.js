const Bannernav = document.querySelector(".bannerNav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 696) {
    Bannernav.classList.add("fixed");
  } else {
    Bannernav.classList.remove("fixed");
  }
});