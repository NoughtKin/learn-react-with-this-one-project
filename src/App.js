import { useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todo, setTodo] = useState([]);

  function addTodo(title) {
    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), completed: false, title },
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

  function deleteTodo(id) {
    setTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div>
      <NewItemForm addTodo={addTodo} />
      <h1>Todo list</h1>
      <TodoList todo={todo} />
    </div>
  );
}
