import { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID, completed: false, title: item },
      ];
    });
  }

  return (
    <div>
      <form className="new-item-form" onSubmit={handleSubmit}>
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
        {todo.map((currentTodo) {
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} value={todo.title}/>
              Item 1
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
        })}
      </ul>
    </div>
  );
}
