import "./style.css";

export function loadAbout() {
  const content = document.querySelector("#content");
  const headline = document.createElement("span");
  const headlineWrapper = document.createElement("div");
  const blurb = document.createElement("p");
  const blurbWrapper = document.createElement("div");

  headline.textContent = "A taggy mission statement...";
  headline.classList.add("headline");
  headlineWrapper.classList.add("headline-wrapper");
  headlineWrapper.appendChild(headline);

  blurb.textContent = "A more in-depth explanation on the values and history of the cafe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec augue mi. Suspendisse potenti. Ut sed orci at ante efficitur sollicitudin sed sit amet nibh. Nulla eget suscipit ex, et lacinia lectus. Ut rhoncus mi nec tortor malesuada, vel volutpat elit mattis. Nunc condimentum enim at neque vulputate egestas. Pellentesque tempor pretium lacus, vitae varius justo volutpat a. Praesent nibh neque, vehicula nec elit non, gravida efficitur purus.";
  blurb.classList.add("blurb");
  blurbWrapper.classList.add("blurb-wrapper");
  blurbWrapper.appendChild(blurb);

  content.appendChild(headlineWrapper);
  content.appendChild(blurbWrapper);
}