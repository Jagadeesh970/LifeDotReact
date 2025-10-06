import { useState } from "react";
import { Navigate, Link } from "react-router";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", username, email, password);

    // reset
    setUsername("");
    setEmail("");
    setPassword("");

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 sm:px-6">
      <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-green-400 mb-6">
          Create Account
        </h1>
        <form
          onSubmit={handleRegisterSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Enter name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Back to login */}
        <p className="mt-4 text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-400 hover:underline hover:text-green-300"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
