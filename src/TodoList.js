import { TodoItem } from "./TodoItem";

export function TodoList({ todo }) {
  return (
    <ul>
      {todo.length === 0 && "No todo list"}
      {todo.map((todo) => {
        return <TodoItem {...todo} key={todo.id} />;
      })}
    </ul>
  );
}
