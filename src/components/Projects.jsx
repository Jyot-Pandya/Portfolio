const projects = [
    {
      title: "ShopHub",
      description: "A full-stack e-commerce platform with admin dashboard, OAuth login, Razorpay integration, and light/dark mode. Features fully responsive design.",
      tech: ["React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "SQL"],
      link: "https://shophub-ecom.vercel.app",
    },
    {
      title: "Payora",
      description: "A wallet-based P2P transaction system with authentication and sleek UI. Implements monorepo architecture for modular scalability.",
      tech: ["Next.js", "TailwindCSS", "PostgreSQL", "Prisma", "NextAuth", "Turborepo"],
      link: "https://payora-user.vercel.app/home",
    },
    {
      title: "Vinayak Industries Website",
      description: "Currently designing and developing a company website to establish online presence for a manufacturing firm. Leading requirements gathering and implementation.",
      tech: ["React", "TailwindCSS", "Node.js", "Responsive Design"],
      link: null,
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
                {project.link && (
                  <a
                    href={project.link}
                    className="mt-4 inline-block text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  