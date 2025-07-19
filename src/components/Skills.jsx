const skills = [
    // Languages
    "JavaScript", "TypeScript", "Java",
    // Frontend
    "React", "Next.js", "TailwindCSS", "HTML", "CSS", "Framer Motion",
    // Backend
    "Node.js", "Express.js", "PostgreSQL", "MongoDB", "SQL", "Prisma",
    // Tools & DevOps
    "Git", "Docker", "Kubernetes", "AWS", "Nginx", "Turborepo", "Vite",
    // Other
    "NextAuth", "Recoil", "Postman"
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <div className="flex flex-wrap justify-center mt-6 gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  