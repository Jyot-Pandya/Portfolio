const Contact = () => {
    return (
      <section id="contact" className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
          <p className="mt-4 text-gray-600">
            Feel free to reach out for any collaboration or queries!
          </p>
  
          <div className="mt-6">
            <a
              href="mailto:jyot.pce22@sot.pdpu.ac.in"
              className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600"
            >
              Email Me
            </a>
          </div>
  
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://github.com/Jyot-Pandya" target="_blank" className="text-gray-700 hover:text-gray-900 text-2xl">
              🔗 GitHub
            </a>
            <a href="https://www.linkedin.com/in/jyot-pandya-b91586264" target="_blank" className="text-gray-700 hover:text-gray-900 text-2xl">
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  