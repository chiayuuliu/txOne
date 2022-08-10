const Bannernav = document.querySelector(".bannerNav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 696) {
    Bannernav.classList.add("fixed");
  } else {
    Bannernav.classList.remove("fixed");
  }
});
// 複製URL
function copyURI(e) {
  e.preventDefault();
  navigator.clipboard.writeText(e.target.getAttribute("data-value")).then(
    () => {
      console.log("ok");
    },
    () => {
      console.log("fail");
      /* clipboard write failed */
    }
  );
}
// scroll
const contentOneBtn = document.querySelector(".contentOneBtn");
const contentOne = document.querySelector(".contentOne");

contentOneBtn.addEventListener("click", () => {
  console.log(window.self)
  const top = 1400
  window.screenTop = top
})