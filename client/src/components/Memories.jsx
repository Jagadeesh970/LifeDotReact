import React, { useState } from "react";
import { Navigate } from "react-router";

const Memories = () => {
  const [redirect, setRedirect] = useState(false);
  const [memory, setMemory] = useState("");
  const [type, setType] = useState("Happy");
  const [memoriesList, setMemoriesList] = useState([]);

  if (redirect) {
    return <Navigate to="/createnote" replace />;
  }

  const handleSaveMemory = (e) => {
    e.preventDefault();
    if (!memory.trim()) return;

    const newMemory = {
      text: memory,
      type,
      date: new Date().toLocaleDateString("en-GB"),
    };

    setMemoriesList([...memoriesList, newMemory]);
    setMemory("");
    setType("Happy");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Memories</h1>

      {/* Form */}
      <form
        onSubmit={handleSaveMemory}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-4"
      >
        <textarea
          value={memory}
          onChange={(e) => setMemory(e.target.value)}
          placeholder="Write your memory..."
          className="w-full h-32 p-3 rounded-md bg-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Dropdown for type */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Happy">😊 Happy</option>
          <option value="Sad">😢 Sad</option>
          <option value="Neutral">😐 Neutral</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-md transition"
        >
          Save Memory
        </button>
      </form>

      {/* Memories List */}
      <div className="mt-8 w-full max-w-lg">
        {memoriesList.length > 0 ? (
          <ul className="space-y-4">
            {memoriesList.map((m, index) => (
              <li
                key={index}
                className="bg-gray-800 p-4 rounded-md shadow-md flex flex-col"
              >
                <p className="text-lg">{m.text}</p>
                <div className="flex justify-between mt-2 text-sm text-gray-400">
                  <span>{m.date}</span>
                  <span>
                    {m.type === "Happy" && "😊"}
                    {m.type === "Sad" && "😢"}
                    {m.type === "Neutral" && "😐"} {m.type}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">No memories yet.</p>
        )}
      </div>

      {/* Back Button */}
      <button
        onClick={() => setRedirect(true)}
        className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
      >
        Back to Create Note
      </button>
    </div>
  );
};

export default Memories;
