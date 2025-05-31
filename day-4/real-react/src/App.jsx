import { useState,createElement } from "react";
import "./App.css";

function App() {
  const [name1, setName1] = useState("hazhar");
  const [name2, setName2] = useState("sia");
  const [name3, setName3] = useState("ehsan");
  
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  );
}

export default App;
