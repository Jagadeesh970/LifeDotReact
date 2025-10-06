const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 py-16">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-blue-600 mb-8 text-center">
        About LifeDots
      </h1>

      {/* Description */}
      <p className="max-w-4xl text-center text-gray-300 text-lg mb-10 leading-relaxed">
        LifeDots is designed to help you **organize your daily thoughts and plan for the future**. 
        This platform allows you to quickly store today's data, track important entries, and manage 
        your ideas efficiently. By keeping your information structured and accessible, LifeDots 
        ensures you never lose track of your tasks and memories.
      </p>

      {/* Features Section */}
      <div className="max-w-4xl grid md:grid-cols-2 gap-8 text-gray-300">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-500 mb-3">Entries Page</h2>
          <p>
            The <span className="font-semibold text-white">Entries</span> page is where you store 
            all your daily notes and records. It helps you keep track of what happened today 
            and revisit past entries anytime for reflection or planning.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-500 mb-3">Categories Page</h2>
          <p>
            The <span className="font-semibold text-white">Categories</span> page helps you organize 
            your notes into different groups. By categorizing your data, you can quickly access 
            related information, making your workflow more efficient and structured.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
