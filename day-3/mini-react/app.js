import { useState } from "./hooks/index";

let hooks = [];
let hookIndex = 0;

function useState(initialValue) {
  const currentIndex = hookIndex;

  if (hooks[currentIndex] === undefined) {
    hooks[currentIndex] = initialValue;
  }

  const setState = (newValue) => {
    hooks[currentIndex] = newValue;
    renderApp();
  };

  hookIndex++;
  return [hooks[currentIndex], setState];
}

function Counter() {
  const [count, setCount] = useState(0);

  const container = document.createElement("div");

  const counter = document.createElement("p");
  counter.textContent = `Count: ${count}`;

  const btn = document.createElement("button");
  btn.textContent = "افزایش";
  btn.onclick = () => setCount(count + 1);

  container.appendChild(counter);
  container.appendChild(btn);

  return container;
}

function renderApp() {
  hookIndex = 0;
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(Counter());
}

renderApp();
