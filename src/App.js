import { useState } from "react";
import { NewItemForm } from "./NewItemForm";

export default function App() {
  const [todo, setTodo] = useState([]);

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

  function deleteTodo(id) {
    setTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div>
      <NewItemForm />
      <h1>Todo list</h1>
      <ul>
        {todo.length === 0 && "No todo list"}
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
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
