
import "@/styles/todo.css";
import { useState, useMemo } from "react";
import { todosT } from "@/data/todoData";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import StatusFilter from "./StatusFilter";
import { getFilteredTodos } from "@/utils/filterTodos";

export default function App() {
  const [todos, setTodos] = useState(todosT);
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredTodos = useMemo(
    () => getFilteredTodos(todos, filterStatus),
    [todos, filterStatus]
  );

  const handleAdd = (title) => {
    if (!title.trim()) return;
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleEdit = (updates) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === updates.id ? { ...todo, ...updates } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <StatusFilter
        currentFilter={filterStatus}
        onFilterChange={setFilterStatus}
      />
      <AddTodo handleAdd={handleAdd} />
      <TodoList todos={filteredTodos} handleEdit={handleEdit} />
      {filteredTodos.length === 0 && (
        <div className="empty-state">
          No todos found. Try changing your filter.
        </div>
      )}
    </div>
  );
}
