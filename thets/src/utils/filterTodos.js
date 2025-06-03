
export function getFilteredTodos(todos, status) {
  switch (status) {
    case "completed":
      return todos.filter((todo) => todo.completed);
    case "pending":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
}
