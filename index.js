const Bannernav = document.querySelector(".bannerNav");
const contentOneBtn = document.querySelector(".contentOneBtn");
// 手機版卡片開合
const CardWrap = document.querySelector(".scheduleCardWrap");
const ToggleBtn = document.querySelector(".cardToggleBtn");

// nav 滑動固定
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
    }
  );
}
// scroll到指定位置
contentOneBtn.addEventListener("click", () => {
  const contentOne = document.querySelector(".contentOne");
  contentOne.scrollIntoView({ behavior: "smooth", block: "end", inline: "start" })
})

// 
ToggleBtn.addEventListener("click", () => {
  const toggleText = document.querySelector(".toggleText");
  CardWrap.classList.toggle('close')
  ToggleBtn.classList.toggle('open')
  if (ToggleBtn.classList.contains("open")) {
    toggleText.innerHTML = '<i class="fa-solid fa-chevron-down"></i>收起議程列表'
  } else {
    toggleText.innerHTML = '<i class="fa-solid fa-chevron-down"></i>展開議程列表'
  }
})