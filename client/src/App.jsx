
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Entries from "./pages/Entries";
import Categories from "./pages/Categories";
import Footer from "./components/Footer";
import Login from "./components/Auth/Login";
import Signin from './components/Auth/Signin';
import CreateNote from "./components/CreateNote";
import AddTask from "./components/AddTask";
import Dairy from "./components/Dairy";
import Memories from "./components/Memories";
import Reminders from "./components/Reminders";
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
       <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entries" element={<Entries />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Signin/>}/>
          <Route path="/createnote" element={<CreateNote/>}/>
          <Route path="/createnote/addtask" element={<AddTask/>}/>
          <Route  path="/createnote/dairy" element={<Dairy/>}/>
          <Route  path="/createnote/memories" element={<Memories/>}/>
          <Route path="/createnote/reminders" element={<Reminders/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
