// import { useState, useEffect } from 'react';
// import LoadingScreen from './components/LoadingScreen';
// import Header from './components/Header';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import BackToTop from './components/BackToTop';

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const revealElements = document.querySelectorAll('.reveal');
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('active-reveal');
//         }
//       });
//     });

//     revealElements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const handleLoadingComplete = () => {
//     setIsLoading(false);
//   };

//   return (
//     <div className="App">
//       {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
//       {!isLoading && (
//         <>
//           <Header />
//           <main>
//             <Home />
//             <About />
//             <Projects />
//             <Services />
//             <Contact />
//           </main>
//           <Footer />
//           <BackToTop />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}

      {loaded && (
        <div className="fade-in">
          <Header />
          <main>
            <Home />
            <About />
            <Projects />
            <Services />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
