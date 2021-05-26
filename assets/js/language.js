function initLanguageSelector(currentLanguage) {
  document.querySelector("#languageSelector > li > a[data-lang-code='" + currentLanguage + "']").classList.add("active");
}
