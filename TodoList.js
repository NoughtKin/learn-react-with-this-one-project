export function TodoList() {
  return (
    <ul>
      {todo.length === 0 && "No todo list"}
      {todo.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(event) => toggleTodo(todo.id, event.target.checked)}
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
  );
}
