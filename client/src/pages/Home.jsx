import About from "../components/About";
import AnimatedButton from "../components/AnimatedButton";
import Clock from "../components/Clock";
import TodaysReminders from "../components/TodaysReminders";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black gap-10">
      <Clock />
      <AnimatedButton />
      <TodaysReminders />
      <About />
    </div>
  );
};

export default Home;
