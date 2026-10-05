(function () {
  "use strict";
  const supportEmail = "earnovaofficial97@gmail.com";
  document.querySelectorAll("[data-support-email]").forEach((element) => {
    element.href = `mailto:${supportEmail}`;
    element.textContent = supportEmail;
  });
  window.addEventListener("error", (event) => {
    console.error("Unexpected application error:", event.error || event.message);
  });
  window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled application rejection:", event.reason);
  });
}());
