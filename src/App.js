import React, { useState } from "react";
import "./styles.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputText.trim() !== "") {
      setItems([...items, inputText]);
      setInputText("");
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter item"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
