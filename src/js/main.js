// Import our custom CSS
import '../scss/styles.scss'
// import { Scrollspy, initMDB } from "mdb-ui-kit";

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// initMDB({ Scrollspy });

document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
});