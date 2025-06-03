
import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleEdit }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleEdit={handleEdit} />
      ))}
    </div>
  );
}
