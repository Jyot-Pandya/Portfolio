const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Left Side - Text */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-600">
            I'm a passionate <span className="font-semibold text-blue-600">Computer Science undergraduate</span> with a strong foundation in 
            <span className="font-semibold text-blue-600"> full-stack web development</span> and system design. Based in 
            <span className="font-semibold text-blue-600"> Gandhinagar, Gujarat</span>, I specialize in building 
            <span className="font-semibold text-blue-600"> scalable, production-ready applications</span>.
          </p>
          <p className="mt-2 text-gray-600">
            I have solved <span className="font-semibold text-blue-600">200+ problems</span> across LeetCode, GeeksforGeeks, and CodeChef. 
            Currently working with <span className="font-semibold text-blue-600">modern frameworks and cloud-native tools</span>, 
            I'm passionate about creating efficient and robust web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
