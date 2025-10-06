import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const navigate = useNavigate();

  const handleCategorySelect = (type) => {
    navigate(`/createnote/${type}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Create Note</h1>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-6">
        <button
          className="bg-green-600 py-4 rounded hover:bg-green-500"
          onClick={() => handleCategorySelect("task")}
        >
          Task
        </button>
        <button
          className="bg-yellow-600 py-4 rounded hover:bg-yellow-500"
          onClick={() => handleCategorySelect("dairy")}
        >
          Dairy
        </button>
        <button
          className="bg-pink-600 py-4 rounded hover:bg-pink-500"
          onClick={() => handleCategorySelect("memory")}
        >
          Memory
        </button>
        <button
          className="bg-purple-600 py-4 rounded hover:bg-purple-500"
          onClick={() => handleCategorySelect("reminder")}
        >
          Reminder
        </button>
      </div>

      <button
        className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default CreateNote;
