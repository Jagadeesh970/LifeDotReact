import { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthStore } from "../../Store/AuthStore";
import axios from "axios";
import { API_URL } from "../../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(AuthStore);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, { email, password });

      
      localStorage.setItem("token", res.data.token);

      setUser(res.data.user);

      setRedirect(true);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  if (redirect) return <Navigate to="/" replace />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-blue-500 mb-6 text-center">Login</h1>
        <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
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
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400 text-sm">
          Don’t have an account? <Link to="/register" className="text-blue-400">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
