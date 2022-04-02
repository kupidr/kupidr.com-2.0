let versionView = document.querySelector("footer .footer-end .version-view");
let webisteVList = document.querySelector(
  "footer .footer-end .website-versions"
);

versionView.addEventListener("click", () => {
  webisteVList.style.display = "block";
});
