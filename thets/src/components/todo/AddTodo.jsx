
import { useState } from "react";

export default function AddTodo({ handleAdd }) {
  const [input, setInput] = useState("");

  const onSubmit = () => {
    handleAdd(input);
    setInput("");
  };

  return (
    <div className="add-todo">
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button className="button" onClick={onSubmit}>
        Add
      </button>
    </div>
  );
}
