import Data from "./Data.js";
Data();
let allItems = document.getElementById("all-items").children;

// portfolio title and show total projects
let totalProjectLength = document.getElementById("total-project");
totalProjectLength.innerHTML = `(${allItems.length})`;

// // filter portfolio
// let filter_btn = document.querySelector(".category-btn").children;
// let parent = document.getElementById("all-items").children;
// for (let i = 0; i < filter_btn.length; i++) {
//   filter_btn[i].addEventListener("click", function () {
//     for (let j = 0; j < filter_btn.length; j++) {
//       filter_btn[j].classList.remove("active");
//     }
//     this.classList.add("active");
//     let target = this.getAttribute("data-target");
//     for (let k = 0; k < parent.length; k++) {
//       parent[k].style.display = "none";
//       if (target == parent[k].getAttribute("data-id")) {
//         parent[k].style.display = "block";
//       }
//       if (target == "all") {
//         parent[k].style.display = "block";
//       }
//     }
//   });
// }
/*
// show more item here
let showMore = document.querySelector(".show-portfoilo button");
for (let i = 0; i < allItems.length; i++) {
  if (i < 12) {
    allItems[i].style.display = "block";
  }
}
currentItem = 12;
showMore.onclick = () => {
  let boxes = [...document.querySelectorAll("#all-items > div")];
  for (let i = currentItem; i < currentItem + 12; i++) {
    boxes[i].style.display = "block";
  }
  currentItem += 12;
  if (currentItem >= boxes.length) {
    showMore.style.display = "none";
  }
};
*/
