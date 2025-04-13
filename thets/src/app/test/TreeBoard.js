import React, { useState } from "react";

const TrelloBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskName, setEditTaskName] = useState("");
  const [editTaskCategory, setEditTaskCategory] = useState("");

  const addTask = () => {
    if (taskName && taskCategory) {
      setTasks([...tasks, { id: Date.now(), name: taskName, category: taskCategory }]);
      setTaskName("");
      setTaskCategory("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (task) => {
    setEditTaskId(task.id);
    setEditTaskName(task.name);
    setEditTaskCategory(task.category);
  };

  const saveEdit = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editTaskId ? { ...task, name: editTaskName, category: editTaskCategory } : task
      )
    );
    setEditTaskId(null);
    setEditTaskName("");
    setEditTaskCategory("");
  };

  const changeCategory = (taskId, newCategory) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, category: newCategory } : task)));
  };

  const categories = [...new Set(tasks.map((task) => task.category))];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Trello-like Task Board</h1>
      <div className="flex gap-2 mb-6 justify-center">
        <input
          type="text"
          className="p-2 border rounded-md"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
        />
        <input
          type="text"
          className="p-2 border rounded-md"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
          placeholder="Task category"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{category}</h2>
            <ul className="space-y-2">
              {tasks.filter((task) => task.category === category).map((task) => (
                <li key={task.id} className="bg-gray-200 p-2 rounded-md flex justify-between">
                  {editTaskId === task.id ? (
                    <>
                      <input
                        type="text"
                        className="p-1 border rounded-md"
                        value={editTaskName}
                        onChange={(e) => setEditTaskName(e.target.value)}
                      />
                      <input
                        type="text"
                        className="p-1 border rounded-md"
                        value={editTaskCategory}
                        onChange={(e) => setEditTaskCategory(e.target.value)}
                      />
                      <button className="bg-green-500 text-white px-2 py-1 rounded-md" onClick={saveEdit}>
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <span>{task.name}</span>
                      <div className="space-x-2">
                        <button className="bg-yellow-500 text-white px-2 py-1 rounded-md" onClick={() => startEditing(task)}>
                          Edit
                        </button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={() => deleteTask(task.id)}>
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrelloBoard;
