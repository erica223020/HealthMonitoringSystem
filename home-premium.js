"use strict";
document.addEventListener("DOMContentLoaded", function () {
  [].slice
    .call(document.querySelectorAll(".toast"))
    .map(function (t) {
      return new bootstrap.Toast(t);
    })
    .forEach((t) => t.show());
});
