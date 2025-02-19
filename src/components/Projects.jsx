const projects = [
    {
      title: "Job Board Platform",
      description: "A platform where users can search and apply for jobs.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform with payment integration.",
      tech: ["MERN", "Stripe", "Tailwind"],
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "A dashboard to track social media analytics.",
      tech: ["React", "Chart.js", "Firebase"],
      link: "#",
    },
    {
      title: "URL Shortener",
      description: "A web app to shorten long URLs with analytics tracking.",
      tech: ["Express.js", "MongoDB", "React"],
      link: "#",
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-16 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-2 flex flex-wrap justify-center">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 m-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  