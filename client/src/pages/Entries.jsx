import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Entries = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/api/notes`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const today = new Date();
        const startOfDay = new Date(today.setHours(0, 0, 0, 0));
        const endOfDay = new Date(today.setHours(23, 59, 59, 999));

        const todayEntries = res.data.filter((entry) => {
          const entryDate = new Date(entry.date);
          return entryDate >= startOfDay && entryDate <= endOfDay;
        });

        setEntries(todayEntries);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    };

    fetchEntries();
  }, []);

  // Separate entries by type
  const tasks = entries.filter(e => e.type === "task");
  const dairies = entries.filter(e => e.type === "dairy");
  const memories = entries.filter(e => e.type === "memory");
  const reminders = entries.filter(e => e.type === "reminder");

  const renderEntries = (type, data, addRoute) => (
    <div className="mb-6 w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-2">{type}</h2>
      {data.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {data.map((e, idx) => (
            <li key={idx} className="bg-gray-800 p-3 rounded">
              {e.title || e.content}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">No {type.toLowerCase()} entries for today.</p>
          <button
            onClick={() => navigate(addRoute)}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-500 w-max"
          >
            Add {type}
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 px-4 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Today's Entries</h1>

      {renderEntries("Tasks", tasks, "/addtask")}
      {renderEntries("Dairy", dairies, "/dairy")}
      {renderEntries("Memories", memories, "/memories")}
      {renderEntries("Reminders", reminders, "/reminders")}
    </div>
  );
};

export default Entries;
