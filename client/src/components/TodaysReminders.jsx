import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { motion, AnimatePresence } from "framer-motion";

const TodaysReminders = () => {
  const [reminders, setReminders] = useState([]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/api/notes?type=reminder`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const today = new Date();
        const startOfDay = new Date(today.setHours(0, 0, 0, 0));
        const endOfDay = new Date(today.setHours(23, 59, 59, 999));

        const todayReminders = res.data.filter((r) => {
          const rDate = new Date(r.date);
          return rDate >= startOfDay && rDate <= endOfDay;
        });

        setReminders(todayReminders);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    };

    fetchReminders();
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-64" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 w-full"
      >
        Today&apos;s Reminders
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-full bg-gray-800 rounded shadow-lg z-10 p-4"
          >
            {reminders.length > 0 ? (
              <ul className="flex flex-col gap-2 max-h-60 overflow-y-auto">
                {reminders.map((r) => (
                  <li key={r._id} className="bg-gray-700 p-2 rounded">
                    {r.content}{" "}
                    <span className="text-xs text-gray-400">
                      {new Date(r.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 text-center">No reminders for today.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TodaysReminders;
