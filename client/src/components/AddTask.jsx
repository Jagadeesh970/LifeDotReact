import { useState } from "react";
import { Navigate } from "react-router";

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to="/createnote" replace />;
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { text: taskInput, completed: false }]);
    setTaskInput("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Add Your Tasks
      </h1>
      <form
        onSubmit={handleAddTask}
        className="flex justify-center gap-2 mb-6"
      >
        <input
          type="text"
          placeholder="Enter your task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
        >
          Add
        </button>
      </form>

      <div className="max-w-md mx-auto">
        {tasks.length === 0 ? (
          <p className="text-gray-400 text-center">No tasks added yet.</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(index)}
                    className="h-4 w-4 text-blue-500"
                  />
                  <span
                    className={`${
                      task.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <button
                  onClick={() => removeTask(index)}
                  className="text-red-500 hover:text-red-400 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setRedirect(true)}
          className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Back to Create Note
        </button>
      </div>
    </div>
  );
};

export default AddTask;
