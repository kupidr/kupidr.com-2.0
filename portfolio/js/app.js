import { portfolioOne } from "./Data.js";
let totalProjectLength = document.getElementById("total-project");
let allItems = document.getElementById("all-items");
let categoryBtn = document.querySelector(".category-btn").children;

// --------------------- data end and output creation ---------------------
portfolioOne.sort(function (a, b) {
  return b.id - a.id;
});

/**
 * short the if in our code
 */

// all items filtered here
for (let i = 0; i < categoryBtn.length; i++) {
  categoryBtn[i].addEventListener("click", function () {
    if (i === 0) {
      totalProjectLength.innerHTML = "";
      allItems.innerHTML = "";
      itemOutput(portfolioOne);
      totalProjectLength.innerHTML = `(${allItems.children.length})`;
    }
    if (i === 1) {
      totalProjectLength.innerHTML = "";
      allItems.innerHTML = "";
      itemOutput(itemsFilter("css"));
      totalProjectLength.innerHTML = `(${allItems.children.length})`;
    }
    if (i === 2) {
      totalProjectLength.innerHTML = "";
      allItems.innerHTML = "";
      itemOutput(itemsFilter("sass"));
      totalProjectLength.innerHTML = `(${allItems.children.length})`;
    }
    if (i === 3) {
      totalProjectLength.innerHTML = "";
      allItems.innerHTML = "";
      itemOutput(itemsFilter("bs"));
      totalProjectLength.innerHTML = `(${allItems.children.length})`;
    }
    if (i === 4) {
      totalProjectLength.innerHTML = "";
      allItems.innerHTML = "";
      itemOutput(itemsFilter("js"));
      totalProjectLength.innerHTML = `(${allItems.children.length})`;
    }
  });
}
// all items output here
itemOutput(portfolioOne);
totalProjectLength.innerHTML = `(${allItems.children.length})`;

// all items filter category fun
function itemsFilter(sass) {
  return portfolioOne.filter((value) => {
    return value.using === sass;
  });
}
// item implement function here
function itemOutput(items) {
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let div = document.createElement("div");
    div.classList.add("col-lg-4");
    div.classList.add("col-md-6");
    div.setAttribute("id", item.using);
    allItems.appendChild(div);
    div.innerHTML = `
        <div class="item">
          <a href="${item.liveLink}" target="_blank">
            <div class="port-img" style="background-image: url(./portfolio_images/${item.image})"></div>
          </a>
          <div class="des">
            <h2>${item.heading} <span>${item.id}</span></h2>
            <p>${item.description}</p>
          </div>
          <div class="port-link">
              <div>
                <a href="${item.liveLink}" target="_blank"><i class="fas fa-eye-slash"></i></a>
              </div>
              <div class="text-end">
                <a href="${item.sourceLink}" target="_blank"><i class="fab fa-github"></i></a>
              </div>
          </div>
        </div>`;
  }
}
