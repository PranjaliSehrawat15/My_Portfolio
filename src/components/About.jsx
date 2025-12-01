const About = () => {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">ABOUT ME</p>
        <div className="mb-6">
          <h1 className="text-4xl lg:text-5xl font-open-sans font-bold">Building Meaningful</h1>
          <h1 className="text-4xl lg:text-5xl font-open-sans font-bold">Digital Experiences</h1>
        </div>
        
        <hr className="w-1/3 border-gray-300 dark:border-gray-600 mb-12" />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="space-y-6 mb-8 text-gray-600 dark:text-gray-300">
              <p>
                I'm a creative front-end developer passionate about building modern and responsive web experiences.
                My journey began with a love for design and evolved into a deep curiosity for how the web works — combining 
                logic with creativity to bring ideas to life.
              </p>
              <p>
                When I'm not coding, I enjoy learning new technologies, improving my projects, 
                and exploring better ways to make the web faster and more engaging.
                I believe in continuous learning, attention to detail, and the power of clean, meaningful design.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">What Drives Me</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-black dark:border-primary rounded-lg p-6 text-center card-hover bg-white dark:bg-gray-800">
                <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
                  <i className="fa-solid fa-code text-primary"></i> Languages and Frameworks
                </h3>
                <p className="text-gray-600 dark:text-gray-300">HTML, CSS, JavaScript, C, C++, Python, React, TailwindCSS</p>
              </div>

              <div className="border-2 border-black dark:border-primary rounded-lg p-6 text-center card-hover bg-white dark:bg-gray-800">
                <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
                  <i className="fa-solid fa-graduation-cap text-primary"></i> Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300">B.Tech in Computer Science Engineering (Currently Pursuing)</p>
              </div>

              <div className="border-2 border-black dark:border-primary rounded-lg p-6 text-center card-hover bg-white dark:bg-gray-800">
                <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
                  <i className="fa-solid fa-folder-open text-primary"></i> Projects
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Built more than 5 projects</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img 
              src="/images/img2.gif" 
              alt="About Pranjali" 
              className="rounded-lg w-full max-w-md border border-black dark:border-primary shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;