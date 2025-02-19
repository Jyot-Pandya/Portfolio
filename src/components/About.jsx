const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Left Side - Text */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-600">
            I'm a passionate <span className="font-semibold text-blue-600">Full-Stack Developer</span> and 
            <span className="font-semibold text-blue-600"> Cybersecurity Analyst</span> with a strong foundation in 
            <span className="font-semibold text-blue-600"> React, Tailwind, and Node.js</span>. I enjoy building user-friendly web applications and ensuring 
            their security. Currently, I'm pursuing a <span className="font-semibold text-blue-600">B.Tech in Computer Science</span> at 
            <span class="font-semibold text-blue-600"> Pandit Deendayal Energy University</span>.
          </p>
          <p className="mt-2 text-gray-600">
            I specialize in developing <span className="font-semibold text-blue-600">full-stack web applications</span> with MERN stack and have a keen interest in 
            <span className="font-semibold text-blue-600"> AI & security</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
