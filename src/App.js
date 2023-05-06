import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos((currentTodos) => {
      return [...currentTodos, { id: 123, check: true, title: newItem }];
    });
  };

  return (
    <div className="new-item-form">
      <form onSubmit={handleSubmit} className="new-item-row">
        <label htmlFor="item">New item</label>
        <br></br>
        <input
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          type="text"
          id="item"
        ></input>
        <button className="btn">Add</button>
      </form>
    </div>
  );
}

export default App;
