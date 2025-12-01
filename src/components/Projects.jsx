const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Movie Browsing Website",
      description: "A React-based movie discovery platform powered by the TMDB API.Search movies, explore details, and manage your personal watchlist seamlessly.",
      image: "/images/Movie_app.png",
      skills: ["React", "TailwindCSS", "TMDB API"],
      github: "https://github.com/PranjaliSehrawat15/Episode_11",
      demo: "https://movie-app-episode11.netlify.app/"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio to showcase my design and coding projects.",
      image: "/images/Capture d'écran 2025-10-22 182207.png",
      skills: ["React", "TailwindCSS"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Blog Website",
      description: "A modern blog platform built using React and Appwrite for secure authentication and data handling.Users can register, create posts, edit content, and explore blogs in a clean, responsive UI.",
      image: "/images/blog_img.png",
      skills: ["React", "TailwindCSS", "API" , "Appwrite"],
      github: "https://github.com/PranjaliSehrawat15/mega_blog_project",
      demo: "https://mega-blog-phi-sandy.vercel.app/"
    },

    
      {
        id: 4,
        title: "Productivity Dashboard",
        description: "Personal Productivity Dashboard is a clean, minimalist web app that helps you stay focused, organized, and motivated. It combines essential tools like a task list, Pomodoro timer, weather updates, and motivational quotes — all in one place.",
        image: "/images/dashboard.png",
        skills: ["HTML", "CSS", "GSAP"],
        github: "https://github.com/PranjaliSehrawat15/personal_productivity_dashboard",
        demo: "https://personalproductivitydashboard.netlify.app/"
      },
      {
      id: 5,
      title: "Weather App",
      description: "Responsive weather app displaying real-time weather data using API integration.Background dynamically updates based on the searched location for a personalized experience.",
      image: "/images/weather.png",
      skills: ["HTML", "CSS", "JS" ,"API"],
      github: "https://github.com/PranjaliSehrawat15/weather_app",
      demo: "https://calm-smakager-a52fed.netlify.app/"
    },
    {
      id: 6,
      title: "Interview Sense",
      description: "It is an AI Interview Coach An intelligent desktop app built with Python + Tkinter + AI models that analyzes your speech, posture, eye contact, and sentiment in real-time or from recorded videos — helping you improve your interview performance.",
      image: "/images/interview-sense.jpeg",
      skills: ["Python Programming", "Computer Vision", "NLP"],
      github: "https://github.com/PranjaliSehrawat15/Interview-Sense",
      demo: "https://github.com/PranjaliSehrawat15/Interview-Sense"
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