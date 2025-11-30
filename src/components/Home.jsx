import { useEffect, useState, useRef } from 'react';

const Home = () => {
  const [currentWord, setCurrentWord] = useState('');
  const words = ["Frontend Developer", "UI/UX Designer", "Web Enthusiast", "React Developer"];
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndexRef.current];
      
      if (!isDeletingRef.current && charIndexRef.current < currentWord.length) {
        charIndexRef.current++;
        setTimeout(type, 100);
      } else if (isDeletingRef.current && charIndexRef.current > 0) {
        charIndexRef.current--;
        setTimeout(type, 50);
      } else {
        isDeletingRef.current = !isDeletingRef.current;
        if (!isDeletingRef.current) {
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        }
        setTimeout(type, 1000);
      }

      setCurrentWord(currentWord.substring(0, charIndexRef.current));
    };

    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-gray-100 dark:bg-gray-800 inline-block rounded-full px-4 py-2 mb-8">
          <span className="text-green-500 font-bold">. </span>
          Available for freelance work
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl lg:text-7xl font-bold font-raleway mb-6">Hi, I'm Pranjali Sehrawat</h1>
            <h3 className="text-3xl lg:text-4xl font-playfair mb-6 min-h-[48px]">
              {currentWord}
              <span className="animate-pulse">|</span>
            </h3>
            
            <div className="text-gray-600 dark:text-gray-300 mb-6 space-y-1">
              <p>I create beautiful, functional, and user-centered digital experiences. With</p>
              <p>2+ years of experience in web Development, I bring ideas to life through</p>
              <p>clean code and thoughtful design</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-300">
              <p><i className="fa-solid fa-location-dot mr-2"></i> Based in India</p>
              <p><i className="fa-solid fa-briefcase mr-2"></i> Available Now</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="btn-primary">
                {/* <i className="fa-solid fa-arrow-right mr-2"></i> Hire Me */}
                <a href="#contact" className="btn-home1">
                  <i className="fa-solid fa-arrow-right"></i> Hire Me
                </a>

              </button>

              <button className="btn-primary">
                 <a
              href="https://drive.google.com/file/d/18CcY-CRtF1DgbrOMIgDuQgM5MtDGF7JZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-home2"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <i className="fa-solid fa-download mr-2"></i> Resume
                </a>
              </button>

            </div>

            <hr className="my-8 border-gray-300 dark:border-gray-600" />

            <div className="flex flex-wrap items-center gap-4">
              <p className="font-medium">Follow me:</p>
              <div className="flex gap-4 text-xl">
                <a href="https://github.com/PranjaliSehrawat15" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://discord.com/1280760623361298456" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <i className="fa-brands fa-discord"></i>
                </a>
                <a href="https://www.linkedin.com/in/pranjali-sehrawat-b90557328/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/pranjali_1570/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img 
              src="/images/img2.jpg" 
              alt="Pranjali" 
              className="rounded-lg w-full max-w-md shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;