import React, { useState } from "react";
import { Navigate } from "react-router";

const Reminders = () => {
  const [redirect, setRedirect] = useState(false);
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState("");

  if (redirect) {
    return <Navigate to="/createnote" replace />;
  }

  const today = new Date().toISOString().split("T")[0];

  const handleAddReminder = (e) => {
    e.preventDefault();
    console.log("Reminder Added:", { date, reminder });
    setDate("");
    setReminder("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Reminders</h1>

      <form
        onSubmit={handleAddReminder}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-md flex flex-col gap-4"
      >
        
        <input
          type="date"
          min={today}  
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

       
        <input
          type="text"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          placeholder="Enter your reminder..."
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-md transition"
        >
          Add Reminder
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

export default Reminders;
