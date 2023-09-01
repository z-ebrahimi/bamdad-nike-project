//header-opened-search-box
const openedSearchBox = document.getElementById("header-opened-search-box");
const searchBoxInput = document.querySelector(
  "#header-search-box input[type='text']"
);
const openedSearchBoxInput = document.querySelector(
  "#header-opened-search-box input[type='text']"
);
const closeSearchBox = document.getElementById("close-search-box");

searchBoxInput.addEventListener("click", () => {
  openedSearchBox.classList.add("active");
  openedSearchBoxInput.focus();
});
closeSearchBox.addEventListener("click", () => {
  openedSearchBox.classList.remove("active");
});

//header-search-box-icon
const searchBoxIcon = document.getElementById("header-search-box-icon");

searchBoxIcon.addEventListener("click", () => {
  openedSearchBox.classList.add("active");
  openedSearchBoxInput.focus();
});

//main-menu-back-button
const sideMainMenuBackBtn = document.querySelectorAll(
  ".side-main-menu-back-btn"
);
const headerNavbar = document.getElementById("header-navbar");
const sideMainMenuCloseBtn = document.getElementById(
  "side-main-menu-close-btn"
);
//const offCanvasNavbar = document.getElementById("offcanvasNavbar");

sideMainMenuBackBtn.forEach((item) => {
  item.addEventListener("click", () => {
    headerNavbar.classList.remove("navbar-expand-lg");
  });
});
sideMainMenuCloseBtn.addEventListener("click", () => {
  headerNavbar.classList.add("navbar-expand-lg");
});

