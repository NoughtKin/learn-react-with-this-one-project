import { useState } from "react";

export default function App() {
  const [item, nextItem] = useState("")

  function handleSubmit((event) => {event.target.value})

  return (
    <div>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <label htmlFor="item">New item</label>
        <br></br>
        <input type="text" id="item" ></input>
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
