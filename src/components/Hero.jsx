import.meta.env.BASE_URL

const Hero = () => {
  return (
    <section id="hero" className="py-16 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
            Hi, I'm Jyot Pandya
          </h1>
          <p className="mt-4 text-gray-600">
            A <span className="font-semibold text-blue-600">Full-Stack Developer</span> & 
            <span className="font-semibold text-blue-600"> Cybersecurity Analyst</span> passionate about building secure and 
            scalable web applications.
          </p>
          <a
            href={import.meta.env.BASE_URL + 'Jyot_Pandya_Resume.pdf'}
            className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg text-lg font-semibold 
            hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            View Resume
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="/profile.jpg"
            alt="Jyot Pandya"
            className="w-52 h-52 rounded-full shadow-lg border-4 border-white 
            hover:border-blue-500 transform hover:scale-105 transition-all duration-300"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
