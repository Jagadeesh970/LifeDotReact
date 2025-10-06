import { useContext, useState } from "react";
import { AuthStore } from "../../Store/AuthStore";
import { Navigate, Link } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLoginPop } = useContext(AuthStore);

  const [redirect, setRedirect] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in:", username, password);
    setUsername("");
    setPassword("");
    setLoginPop(true);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 sm:px-6">
      <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-500 mb-6">
          Login
        </h1>
        <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
