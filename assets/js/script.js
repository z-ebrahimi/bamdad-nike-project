// header-opened-search-box:
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

// header-search-box-icon:
const searchBoxIcon = document.getElementById("header-search-box-icon");

searchBoxIcon.addEventListener("click", () => {
  openedSearchBox.classList.add("active");
  openedSearchBoxInput.focus();
});

//////////////////////////////////
// header-mainMenu-sideMainMenu:
const sideMainMenuBackBtn = document.querySelectorAll(
  ".side-main-menu-back-btn"
);
const headerNavbar = document.getElementById("header-navbar");
const sideMainMenuCloseBtn = document.getElementById(
  "side-main-menu-close-btn"
);
const offCanvasNavbar = document.getElementById("offcanvasNavbar");
const navItems = document.querySelectorAll(".nav-link");
const mainMenuBackdrop = document.getElementById("main-menu-backdrop");

let isMainMenuExpanded = true; //mainMenu state

// Function to collapse the mainMenu
function collapseMainMenu() {
  headerNavbar.classList.remove("navbar-expand-lg");
  isMainMenuExpanded = false;
}

// Function to expand the mainMenu
function expandMainMenu() {
  headerNavbar.classList.add("navbar-expand-lg");
  isMainMenuExpanded = true;
}

// Function to show mainMenuBackdrop
function showBackDropMenu() {
  mainMenuBackdrop.classList.add("active");
}
// Function to hide mainMenuBackdrop
function hideBackDropMenu() {
  mainMenuBackdrop.classList.remove("active");
}

// sideMainMenuBackBtn
sideMainMenuBackBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the body click event from firing
    collapseMainMenu();
    showBackDropMenu();
  });
});

// sideMainMenuCloseBtn
sideMainMenuCloseBtn.addEventListener("click", () => {
  expandMainMenu();
  hideBackDropMenu();
});

// Add click event listener to the body to close the side menu and expand the main menu
document.body.addEventListener("click", (event) => {
  if (!offCanvasNavbar.contains(event.target) && !isMainMenuExpanded) {
    expandMainMenu();
    hideBackDropMenu();
  }
});

// navItems Click
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    expandMainMenu();
    hideBackDropMenu();
  });
});
//////////////////////////////////
