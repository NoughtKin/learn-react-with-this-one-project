import { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");

  return (
    <div>
      {/* onSubmit={handleSubmit} */}
      <form className="new-item-form">
        <label htmlFor="item">New item</label>
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
