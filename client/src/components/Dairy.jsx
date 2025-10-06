import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const Dairy = () => {
  const navigate = useNavigate();
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!entry.trim()) return;

    try {
      const token = localStorage.getItem("token"); // get token
      const res = await axios.post(
        `${API_URL}/api/notes`,
        { type: "dairy", title: "", content: entry },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEntries([...entries, res.data]);
      setEntry("");
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 px-4 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Dairy</h1>
      <div className="text-gray-400 mb-2">{new Date().toLocaleDateString()}</div>

      <form onSubmit={handleSave} className="w-full max-w-lg flex flex-col gap-4 mb-6">
        <textarea
          placeholder="Write your dairy entry..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 h-40 resize-none"
        />
        <button type="submit" className="bg-yellow-600 py-2 rounded hover:bg-yellow-500">
          Save
        </button>
      </form>

      <ul className="w-full max-w-lg flex flex-col gap-2 mb-6">
        {entries.map((e, idx) => (
          <li key={idx} className="bg-gray-800 p-2 rounded">
            <div className="text-gray-400 text-sm">{new Date(e.createdAt).toLocaleString()}</div>
            <div>{e.content}</div>
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

export default Dairy;
