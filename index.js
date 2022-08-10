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
// scroll到指定位置
const contentOneBtn = document.querySelector(".contentOneBtn");

contentOneBtn.addEventListener("click", () => {
  const contentOne = document.querySelector(".contentOne");
  contentOne.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
})
// 用迴圈改寫
// const sectionBtns = document.querySelectorAll(".sectionBtn")
// sectionBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const el = document.getElementById(btn.getAttribute("data-link"))
//     el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
//     // console.log(btn.getAttribute("data-link"))
//   })
// })