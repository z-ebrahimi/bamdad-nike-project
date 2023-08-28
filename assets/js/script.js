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
