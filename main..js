// Created HTML with JavaScript
const container = document.createElement("div");
container.classList.add("counter");
const heading = document.createElement("h1");
heading.innerText = "Counter";
container.appendChild(heading);
document.body.appendChild(container);
const h2 = document.createElement("h2");
h2.id = "value";
h2.innerText = 0;
container.appendChild(h2);
const decrease = document.createElement("button");
decrease.innerText = "Decrease";
decrease.classList.add("btn", "decrease");
container.appendChild(decrease);
const reset = document.createElement("button");
reset.innerText = "Reset";
reset.classList.add("btn", "reset");
container.appendChild(reset);
const increase = document.createElement("button");
increase.innerText = "Increase";
increase.classList.add("btn", "increase");
container.appendChild(increase);
// Style the document with JS
const body = document.querySelector("body");
body.style.background = "#f4f4f4";
body.style.fontFamily = "Arial, Sans-Serif";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.margin = "0";
// Counter Style
container.style.textAlign = "center";
container.style.background = "white";
container.style.padding = "20px";
container.style.borderRadius = "10px";
container.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
// h1 Style
heading.style.marginBottom = "20px";
heading.style.color = "#333";
//h2 style
h2.style.fontSize = "3em";
h2.style.margin = "20px 0";
h2.style.color = "#333";
// btn style
const btn = document.querySelectorAll(".btn");
for (let i of btn) {
  i.style.fontSize = "1em";
  i.style.padding = "10px 20px";
  i.style.margin = "5px";
  i.style.border = "none";
  i.style.borderRadius = "5px";
  i.style.cursor = "pointer";
  i.style.transition = "background-color 0.3s ease";
}
decrease.style.background = "#e74c3c";
decrease.style.color = "white";

hoverBtn1 = () => {
  decrease.style.background = "#c0392b";
};
hoverOutBtn1 = () => {
  decrease.style.background = "#e74c3c";
};

decrease.addEventListener("mouseover", hoverBtn1);
decrease.addEventListener("mouseout", hoverOutBtn1);
reset.style.background = "#f39c12";
reset.style.color = "white";
hoverOutReset = () => {
  reset.style.background = "#f39c12";
};
hoverReset = () => {
  reset.style.background = "#e67e22";
};
reset.addEventListener("mouseover", hoverReset);
reset.addEventListener("mouseout", hoverOutReset);
increase.style.background = "#2ecc71";
increase.style.color = "white";

hoverIncrese = () => {
  increase.style.background = "#27ae60";
};
hoverOutIncrease = () => {
  increase.style.background = "#2ecc71";
};
increase.addEventListener("mouseover", hoverIncrese);
increase.addEventListener("mouseout", hoverOutIncrease);
clickForIncreament = () => {
  h2.innerText++;
};
clickForDecreament = () => {
  h2.innerText--;
};
increase.addEventListener("click", clickForIncreament);
decrease.addEventListener("click", clickForDecreament);
clickForReset = () => {
  h2.innerText = "0";
};
reset.addEventListener("click", clickForReset);
