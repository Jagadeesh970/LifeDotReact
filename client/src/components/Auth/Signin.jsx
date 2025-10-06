import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config";

const Signin = () => { 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send username, email, and password to backend
      await axios.post(`${API_URL}/api/auth/register`, { username, email, password });
      setRedirect(true); // redirect to login after successful registration
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  if (redirect) return <Navigate to="/login" replace />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-blue-500 mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white"
          />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 py-2 rounded hover:bg-blue-500 text-white"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400 text-sm">
          Already have an account? <Link to="/login" className="text-blue-400">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
