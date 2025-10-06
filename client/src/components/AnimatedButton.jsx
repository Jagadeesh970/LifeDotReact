import { useState, useEffect } from "react";
import { Navigate } from "react-router";

const AnimatedButton = () => {
  const fullText = "Add Note";
  const [text, setText] = useState("");
  const [redirect,setRedirect]=useState(false);
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 150); 
    return () => clearInterval(interval);
  }, []);
  if(redirect){
    return <Navigate to="/createnote" replace/>
  }
  return (
    <button className="relative cursor-pointer px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-lg overflow-hidden 
    transition-transform transform hover:scale-105 hover:shadow-xl"
      onClick={()=>setRedirect(true)}
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-blue-700 opacity-30 rounded-md animate-pulse"></span>
    </button>
  );
};

export default AnimatedButton;
