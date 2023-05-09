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

  function toggleTodo(id, completed) {
    setTodo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
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
        {todo.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(event) =>
                    toggleTodo(todo.id, event.target.checked)
                  }
                />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
