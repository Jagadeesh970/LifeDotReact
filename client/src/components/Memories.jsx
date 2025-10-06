import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Memories = () => {
  const [memory, setMemory] = useState("");
  const [memories, setMemories] = useState([]);
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString();

  const handleAddMemory = async (e) => {
  e.preventDefault();
  if (!memory) return;

  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `${API_URL}/api/notes`,
      { type: "memory", title: "", content: memory, date: today },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setMemories([...memories, res.data]);
    setMemory("");
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 px-4 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-2">Memories</h1>
      <p className="text-gray-400 mb-6">Date: {today}</p>

      <form onSubmit={handleAddMemory} className="flex flex-col gap-4 w-full max-w-lg">
        <textarea
          placeholder="Write your memory..."
          value={memory}
          onChange={(e) => setMemory(e.target.value)}
          className="px-4 py-3 rounded bg-gray-800 w-full resize-none h-32"
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-pink-600 px-4 py-2 rounded hover:bg-pink-500"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500"
            onClick={() => navigate("/createnote")}
          >
            Back
          </button>
        </div>
      </form>

    </div>
  );
};

export default Memories;
