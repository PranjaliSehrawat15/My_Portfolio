
// import { useState, useEffect } from 'react';

// const Header = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [darkMode, setDarkMode] = useState(false);

//   const navItems = [
//     { id: 'home', icon: 'fa-house', label: 'Home' },
//     { id: 'about', icon: 'fa-address-card', label: 'About' },
//     { id: 'project', icon: 'fa-folder-open', label: 'Projects' },
//     { id: 'services', icon: 'fa-code', label: 'Services' },
//     { id: 'contact', icon: 'fa-envelope', label: 'Contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'project', 'services', 'contact'];
//       const scrollPos = window.scrollY + 100;

//       sections.forEach(section => {
//         const element = document.getElementById(section);
//         if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
//           setActiveSection(section);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const toggleDarkMode = () => {
//     const newDarkMode = !darkMode;
//     setDarkMode(newDarkMode);
//     document.body.classList.toggle('dark-mode', newDarkMode);
//     localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setDarkMode(true);
//       document.body.classList.add('dark-mode');
//     }
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
//       <div className="bg-white dark:bg-gray-800 shadow-lg rounded-full px-6 py-3 mt-4 flex items-center gap-8">
//         <nav>
//           <ul className="flex gap-6 flex-wrap">
//             {navItems.map((item) => (
//               <li key={item.id}>
//                 <button
//                   onClick={() => scrollToSection(item.id)}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
//                     activeSection === item.id
//                       ? 'bg-black dark:bg-primary text-white'
//                       : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
//                   }`}
//                 >
//                   <i className={`fa-regular ${item.icon}`}></i>
//                   <span className="font-montserrat">{item.label}</span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
        
//         <div className="toggle-container">
//           <label className="relative inline-block w-14 h-8">
//             <input
//               type="checkbox"
//               checked={darkMode}
//               onChange={toggleDarkMode}
//               className="opacity-0 w-0 h-0"
//             />
//             <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition-all duration-400 rounded-full ${
//               darkMode ? 'bg-primary' : ''
//             }`}>
//               <span className={`absolute left-1 bottom-1 bg-white w-6 h-6 rounded-full transition-all duration-400 ${
//                 darkMode ? 'transform translate-x-6' : ''
//               }`}></span>
//             </span>
//           </label>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: 'fa-house', label: 'Home' },
    { id: 'about', icon: 'fa-address-card', label: 'About' },
    { id: 'project', icon: 'fa-folder-open', label: 'Projects' },
    { id: 'skills', icon: 'fa-solid fa-code', label: 'Skills' },
    { id: 'contact', icon: 'fa-envelope', label: 'Contact' },
  ];

  useEffect(() => {
    document.body.classList.add('dark-mode'); // FORCE DARK MODE

    const handleScroll = () => {
      const sections = ['home', 'about', 'project', 'skills', 'contact'];
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="bg-gray-800 shadow-lg rounded-full px-6 py-3 mt-4 flex items-center gap-8">
        <nav>
          <ul className="flex gap-6 flex-wrap">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <i className={`fa-regular ${item.icon}`}></i>
                  <span className="font-montserrat">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
