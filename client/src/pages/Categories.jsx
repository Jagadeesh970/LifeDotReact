import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

const Categories = () => {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState("task");
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile sidebar toggle

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/api/notes`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEntries(res.data.sort((a, b) => new Date(b.date) - new Date(a.date)));
      } catch (err) {
        console.error(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEntries();
  }, []);

  const filteredEntries =
    filter === "all" ? entries : entries.filter((e) => e.type === filter);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-700 bg-gray-900`}
      >
        <div className="flex justify-between md:block mb-4">
          <h2 className="text-xl font-bold">Categories</h2>
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ✕
          </button>
        </div>
        {["task", "dairy", "memory", "reminder", "all"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`block w-full text-left px-3 py-2 mb-2 rounded hover:bg-gray-700 ${
              filter === cat ? "bg-gray-700 font-bold" : ""
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Mobile toggle button */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-800">
        <h2 className="text-lg font-bold">Categories</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white text-xl">
          ☰
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 flex flex-col gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : filteredEntries.length === 0 ? (
          <p className="text-gray-400">No entries found for {filter}.</p>
        ) : (
          filteredEntries.map((entry) => (
            <div key={entry._id} className="bg-gray-800 p-4 rounded">
              {entry.title && <h3 className="font-bold text-lg">{entry.title}</h3>}
              <p>{entry.content}</p>
              <span className="text-xs text-gray-400">
                {new Date(entry.date).toLocaleString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
