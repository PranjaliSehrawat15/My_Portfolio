export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 text-center">
      <p className="text-primary tracking-wide uppercase text-sm">
        Skills & Expertise
      </p>

      <h2 className="text-4xl font-bold mt-2 mb-10">
        What I Do
      </h2>


      {/* What I Do Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-16">
        
        <div className="skill-card">
          <i className="fa-solid fa-code text-4xl mb-4 text-primary"></i>
          <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
          <p className="text-gray-400 text-sm">
            I build clean, responsive and modern user interfaces using React, TailwindCSS & JavaScript.
          </p>
        </div>

        <div className="skill-card">
          <i className="fa-solid fa-palette text-4xl mb-4 text-primary"></i>
          <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-400 text-sm">
            I design intuitive and user-centered layouts using Figma ensuring smooth and elegant user experiences.
          </p>
        </div>

        <div className="skill-card">
          <i className="fa-solid fa-mobile-screen-button text-4xl mb-4 text-primary"></i>
          <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-400 text-sm">
            Fully responsive layouts that work perfectly on all screens — mobile, tablet, and desktop.
          </p>
        </div>

        <div className="skill-card">
          <i className="fa-solid fa-link text-4xl mb-4 text-primary"></i>
          <h3 className="text-lg font-semibold mb-2">API Integration</h3>
          <p className="text-gray-400 text-sm">
            Connecting applications with real data using REST APIs, Firebase and backend services.
          </p>
        </div>
      </div>



      {/* Tech Stack Badges */}
      <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>

      <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
        
        {[
          "React",
          "JavaScript",
          "TailwindCSS",
          "Firebase",
          "Node.js",
          "Git",
          "Figma",
          "MongoDB"
        ].map((item, index) => (
          <span
            key={index}
            className="px-5 py-2 rounded-full bg-gray-800 border border-gray-700 hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all cursor-default"
          >
            {item}
          </span>
        ))}

      </div>
    </section>
  );
}
