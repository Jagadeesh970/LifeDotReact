import { useState } from "react";
import { Navigate, NavLink } from "react-router";

const CreateNote = () => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to="/" replace />;
  }

  const links = [
    { name: "AddTask", path: "/createnote/addtask" },
    { name: "Dairy", path: "/createnote/dairy" },
    { name: "Memories", path: "/createnote/memories" },
    { name: "Reminders", path: "/createnote/reminders" },
  ];

  return (
    <div className="createnote-container p-6 min-h-screen bg-black mt-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Create Note
      </h1>

      <div className="createnote-bar grid grid-cols-2 gap-4 max-w-lg mx-auto">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `text-center py-3 rounded-lg font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setRedirect(true)}
          className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
