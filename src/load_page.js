import "./style.css";

export function loadPage() {
  const content = document.querySelector("#content");
  const headline = document.createElement("span");
  const headlineWrapper = document.createElement("div");
  const blurb = document.createElement("p");
  const blurbHeading = document.createElement("h2");
  const blurbWrapper = document.createElement("div");

  headline.textContent = "Ridge Cafe";
  headline.classList.add("headline");
  headlineWrapper.classList.add("headline-wrapper");
  headlineWrapper.appendChild(headline);

  blurb.textContent = "A short little blurb tagline for the restaurant--what we serve, what we're known for, etc.";
  blurb.classList.add("blurb");
  blurbHeading.textContent = "Blurb heading";
  blurb.insertBefore(blurbHeading, blurb.firstChild);
  blurbWrapper.classList.add("blurb-wrapper");
  blurbWrapper.appendChild(blurb);

  content.appendChild(headlineWrapper);
  content.appendChild(blurbWrapper);
}