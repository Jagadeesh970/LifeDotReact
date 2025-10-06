import { useState } from "react";
import { Navigate } from "react-router";

const Dairy = () => {
  const [redirect, setRedirect] = useState(false);
  const [entry, setEntry] = useState("");

  if (redirect) {
    return <Navigate to="/createnote" replace />;
  }

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Diary Entry Saved:", entry);
    setEntry("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">My Dairy</h1>
      <p className="text-gray-400 mb-6">{today}</p>
      <form
        onSubmit={handleSave}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-4"
      >
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your thoughts..."
          className="w-full h-40 p-3 rounded-md bg-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-md transition"
        >
          Save Entry
        </button>
      </form>

      <button
        onClick={() => setRedirect(true)}
        className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
      >
        Back to Create Note
      </button>
    </div>
  );
};

export default Dairy;
