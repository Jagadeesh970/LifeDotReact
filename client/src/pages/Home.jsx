import About from "../components/About";
import AnimatedButton from "../components/AnimatedButton";
import Clock from "../components/Clock";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black gap-10">
      <Clock />
      <AnimatedButton />
      <About/>
    </div>
  );
};

export default Home;
