import "./style.css";
import "bootstrap";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "<p>Hello</p>";

  return element;
}

document.body.appendChild(component());
