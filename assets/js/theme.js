document.addEventListener("DOMContentLoaded", () => {
  var activeTheme = localStorage.getItem("activeTheme");
  if (activeTheme) {
    var activeLink = document.querySelector("#themeSelector > li > a[data-theme='" + activeTheme + "']");
    activeLink.classList.add("active");
  }
});

function selectTheme(selectedThemeElement, e) {
  var baseURL = selectedThemeElement.getAttribute("data-url");
  var selectedTheme = selectedThemeElement.getAttribute("data-theme");
  var themeLink = document.querySelector("link[href*='bootswatch']");
  themeLink.setAttribute("href", baseURL + "/vendor/bootswatch/css/" + selectedTheme + ".min.css");

  localStorage.setItem("activeTheme", selectedTheme);

  document.querySelector("#themeSelector > li > a.active").classList.remove("active");
  selectedThemeElement.classList.add("active");
}
