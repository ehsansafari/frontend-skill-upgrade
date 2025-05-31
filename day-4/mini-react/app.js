let dataList = [];
let hookIndex = 0;

function useState(value) {
  const currentIndex = hookIndex;

  if (dataList[currentIndex] === undefined) {
    dataList[currentIndex] = value;
  }

  const setState = (newValue) => {
    dataList[currentIndex] = newValue;
    renderApp();
  };

  hookIndex++;

  return [
    dataList[currentIndex], // getter value
    setState, // setter function
  ];
}

function Counter() {
  const [count, setCount] = useState(0);

  const container = document.createElement("div");
  const counter = document.createElement("p");

  counter.textContent = `count: ${count}`;

  const btn = document.createElement("button");

  btn.textContent = "افزایش";
  btn.onclick = () => setCount(count + 1);

  container.appendChild(counter);
  container.appendChild(btn);

  return container;
}

function renderApp() {
  hookIndex = 0;
  const root = document.getElementById("root");
  root.innerHTML = "";
  root.appendChild(Counter());
}

renderApp();
