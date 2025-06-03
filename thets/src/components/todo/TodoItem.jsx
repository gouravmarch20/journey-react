export default function TodoItem({ todo, handleEdit }) {
  const toggleCompletion = () => {
    handleEdit({ id: todo.id, completed: !todo.completed });
  };

  return (
    <div className="todo-item">
      <span className={`todo-title ${todo.completed ? "completed" : ""}`}>
        {todo.title}
      </span>
      <div className="todo-actions">
        <button className="button" onClick={toggleCompletion}>
          {todo.completed ? "Mark Pending" : "Mark Complete"}
        </button>
      </div>
    </div>
  );
}
