var stylesheet = document.getElementById("theme-stylesheet"),
  alternateStylesheet = document.createElement("link");
alternateStylesheet.setAttribute("id", "new-stylesheet"),
  alternateStylesheet.setAttribute("rel", "stylesheet"),
  stylesheet.parentNode.insertBefore(
    alternateStylesheet,
    stylesheet.nextSibling
  );
var styleSwitcher = document.getElementById("colour");
styleSwitcher.addEventListener("change", function () {
  var e = styleSwitcher.value;
  alternateStylesheet.setAttribute("href", e),
    Cookies.set("switcherColor", e, { expires: 365, path: "/" });
});
var theCookie = Cookies.get("switcherColor");
theCookie && alternateStylesheet.setAttribute("href", theCookie);
