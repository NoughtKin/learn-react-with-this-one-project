import { TodoItem } from "./TodoItem";

export function TodoList({ todo, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todo.length === 0 && "No todo list"}
      {todo.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
