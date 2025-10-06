import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  const day = String(time.getDate()).padStart(2, "0");
  const month = String(time.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const year = time.getFullYear();

  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      {/* Date */}
      <div className="grid grid-cols-3 gap-4 text-center bg-gray-900 p-4 rounded-lg shadow-lg text-blue-500 w-full max-w-md">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{day}</span>
          <span className="text-sm text-gray-400 ">Day</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{month}</span>
          <span className="text-sm text-gray-400">Month</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{year}</span>
          <span className="text-sm text-gray-400">Year</span>
        </div>
      </div>

      {/* Time */}
      <div className="grid grid-cols-3 gap-4 text-center bg-gray-900 p-4 rounded-lg shadow-lg text-white w-full max-w-md">
        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-md shadow-md">
          <span className="text-4xl font-bold">{hours}</span>
          <span className="text-sm text-gray-400">Hours</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-md shadow-md">
          <span className="text-4xl font-bold">{minutes}</span>
          <span className="text-sm text-gray-400">Minutes</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-md shadow-md">
          <span className="text-4xl font-bold">{seconds}</span>
          <span className="text-sm text-gray-400">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
