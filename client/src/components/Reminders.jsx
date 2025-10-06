import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Reminders = () => {
  const [reminder, setReminder] = useState("");
  const [date, setDate] = useState("");
  const [reminders, setReminders] = useState([]);
  const navigate = useNavigate();

  const handleAddReminder = async (e) => {
  e.preventDefault();
  if (!reminder || !date) return;

  try {
    const token = localStorage.getItem("token");
    
    const res = await axios.post(
      `${API_URL}/api/notes`,
      {
        type: "reminder",
        title: "",
        content: reminder,
        date: new Date(date).toISOString()  // <-- convert to ISO string
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setReminders([...reminders, res.data]);
    setReminder("");
    setDate("");
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 px-4 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Reminders</h1>

      <form onSubmit={handleAddReminder} className="flex flex-col gap-4 w-full max-w-lg">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800"
        />
        <input
          type="text"
          placeholder="Reminder..."
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800"
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-500"
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

export default Reminders;
