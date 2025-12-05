// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// initMDB({ Scrollspy });

// Kollar användarepreferens av teman när sidan laddas och byttar till det
const defaultTheme = document.documentElement.getAttribute("data-bs-theme");
const userPreference = window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light";
const storedTheme = localStorage.getItem("theme");
const preferredTheme = storedTheme || userPreference; // sparad teman eller system default

if (defaultTheme === "auto") {
  document.documentElement.setAttribute("data-bs-theme", preferredTheme);
} else {
  document.documentElement.setAttribute("data-bs-theme", defaultTheme);
}

document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-bs-theme");
  const next = current === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-bs-theme", next);
  localStorage.setItem("theme", next);
});