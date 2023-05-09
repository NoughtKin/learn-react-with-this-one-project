import { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (event => {
    event.preventDefault;

    todo = [
      id: current.playerUUID, completed: false, item: setItem
  ]

    setTodo[...todo, setTodo]
  }

  return (
    <div>
      {/* onSubmit={handleSubmit} */}
      <form className="new-item-form">
        <label htmlFor="item" onSubmit={handleSumbit}>New item</label>
        <br></br>
        <input
          type="text"
          id="item"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        ></input>
        <button className="btn">Add</button>
      </form>
      <h1>Todo list</h1>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </div>
  );
}
