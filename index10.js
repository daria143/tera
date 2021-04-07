import "./styles.css";
import ReactDOM from "react-dom";
import React, { useState } from "react";

export default function App() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Дарья");
  const [age, setAge] = useState(22);
  const [color, setColor] = useState("purple");
  const [textColor, setTextColor] = useState("white");

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
      <p>Меня зовут {name}</p>
      <br></br>
      <p>Через год мне будет {age} года</p>
      <button onClick={() => setAge(age + 1)}>Еще спустя год</button>
      <div className="App">
        <br></br>
        <button
          style={{ background: color, color: textColor }}
          className="btn btn-primary"
          onClick={() => {
            setColor("yellow");
            setTextColor("black");
          }}
        >
          Click here
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
