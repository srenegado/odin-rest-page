import "./style.css";

export function loadPage() {
  const content = document.querySelector("#content");
  const headline = document.createElement("span");
  const headlineWrapper = document.createElement("div");

  headline.textContent = "Ridge Cafe";
  headline.classList.add("headline");
  headlineWrapper.classList.add("headline-wrapper");

  headlineWrapper.appendChild(headline);
  content.appendChild(headlineWrapper);
}