import { loadHome } from "./load_home.js";
import { loadMenu } from "./load_menu.js";
import { loadAbout } from "./load_about.js";

function clearContent() {
  const content = document.querySelector("#content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function setUpNavBar() {
  const homeButton = document.querySelector(".home-button");
  const menuButton = document.querySelector(".menu-button");
  const aboutButton = document.querySelector(".about-button");

  homeButton.addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  menuButton.addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  aboutButton.addEventListener("click", () => {
    clearContent();
    loadAbout();
  });
}

loadHome();
setUpNavBar();