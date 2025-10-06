import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Entries from "./pages/Entries";
import Categories from "./pages/Categories";
import Login from "./components/Auth/Login";
import Signin from './components/Auth/Signin';
import CreateNote from "./components/CreateNote";
import AddTask from "./components/AddTask";
import Dairy from "./components/Dairy";
import Memories from "./components/Memories";
import Reminders from "./components/Reminders";
import { useEffect } from "react";
import { API_URL } from "./config";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get(`${API_URL}/api/test`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entries" element={<Entries />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signin />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/createnote/task" element={<AddTask />} />
          <Route path="/createnote/dairy" element={<Dairy />} />
          <Route path="/createnote/memory" element={<Memories />} />
          <Route path="/createnote/reminder" element={<Reminders />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
