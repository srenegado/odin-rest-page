import "./style.css";

export function loadMenu() {
  const content = document.querySelector("#content");
  const headline = document.createElement("span");
  const headlineWrapper = document.createElement("div");

  headline.textContent = "Menu";
  headline.classList.add("headline");
  headlineWrapper.classList.add("headline-wrapper");
  headlineWrapper.appendChild(headline);

  content.appendChild(headlineWrapper);
}