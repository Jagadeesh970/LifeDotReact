import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const AddTask = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      // ✅ get token from localStorage
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${API_URL}/api/notes`,
        {
          type: "task",
          title: task,
          content: ""
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ add token in headers
          },
        }
      );

      setTasks([...tasks, res.data]);
      setTask("");
    } catch (err) {
      console.error("Error while adding task:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 px-4 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Add Tasks</h1>

      <form onSubmit={handleAddTask} className="flex gap-4 w-full max-w-lg mb-6">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 flex-grow"
        />
        <button type="submit" className="bg-green-600 px-4 py-2 rounded hover:bg-green-500">
          Add
        </button>
      </form>

      <ul className="w-full max-w-lg flex flex-col gap-2 mb-6">
        {tasks.map((t, idx) => (
          <li key={idx} className="bg-gray-800 p-2 rounded flex justify-between">
            <span>{idx + 1}. {t.title}</span>
          </li>
        ))}
      </ul>

      <button
        className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500"
        onClick={() => navigate("/createnote")}
      >
        Back
      </button>
    </div>
  );
};

export default AddTask;
