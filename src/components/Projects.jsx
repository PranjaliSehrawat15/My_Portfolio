const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Modern online store with product filtering, cart, and payment system.",
      image: "/images/Cleveroad.jpg",
      skills: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio to showcase my design and coding projects.",
      image: "/images/Capture d'écran 2025-10-22 182207.png",
      skills: ["HTML", "CSS", "Bootstrap"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Weather App",
      description: "Responsive app showing real-time weather data using API integration.",
      image: "/images/Weather Forecast Dashboard.jpg",
      skills: ["HTML", "CSS", "API"],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Blog Website",
      description: "Clean and simple blogging platform with markdown support.",
      image: "/images/WordPress dashboard design concept.jpg",
      skills: ["HTML", "Tailwind", "JavaScript"],
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "Game Landing Page",
      description: "Landing page for a game with animations and parallax effects.",
      image: "/images/Game Dashboard Design.jpg",
      skills: ["HTML", "CSS", "GSAP"],
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Task Manager",
      description: "Task tracking web app with CRUD features and clean UI.",
      image: "/images/Task manager app.jpg",
      skills: ["HTML", "CSS", "JS"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="project" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">PROJECTS</p>
        <h1 className="text-4xl lg:text-5xl font-open-sans font-bold mb-4">Featured Work</h1>
        <hr className="w-1/4 mx-auto border-gray-300 dark:border-gray-600 mb-6" />
        
        <div className="mb-12 text-gray-600 dark:text-gray-300">
          <p>A showcase of my recent projects demonstrating expertise in full-stack</p>
          <p>development, modern frameworks, and creative problem-solving.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-lg card-hover">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-lg text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-3">
                <a 
                  href={project.github}
                  className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all hover:bg-blue-800"
                >
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
                <a 
                  href={project.demo}
                  className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all hover:bg-blue-800"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;