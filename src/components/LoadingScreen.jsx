
// import { useEffect, useState } from 'react';

// const LoadingScreen = ({ onLoadingComplete }) => {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//       setTimeout(() => onLoadingComplete(), 500);
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [onLoadingComplete]);

//   if (!visible) return null;

//   return (
//     <div className="fixed inset-0 bg-black flex justify-center items-center flex-col z-50 transition-opacity duration-500">
//       <div className="text-center text-blue-400">
//         <i className="fa-solid fa-laptop-code text-8xl mb-8 fall"></i>
//         <h1 className="text-4xl font-bold mb-8 fall">MY PROFILE</h1>
        
//         <div className="flex justify-center gap-6 mb-8">
//           <i className="fa-brands fa-github text-2xl fall" style={{ animationDelay: '1600ms' }}></i>
//           <i className="fa-solid fa-code text-2xl fall" style={{ animationDelay: '2000ms' }}></i>
//           <i className="fa-solid fa-user text-2xl fall" style={{ animationDelay: '2400ms' }}></i>
//         </div>

//         <h2 className="text-xl fall" style={{ animationDelay: '2800ms' }}>Designed by Amine</h2>
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;
import { useEffect, useState } from "react";
import "../Loading.css";

export default function LoadingScreen({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const text = document.getElementById("loading-text");
    const laptop = document.querySelector(".main-icon");
    const subIcons = document.querySelectorAll(".sub-icons i");
    const credit = document.getElementById("designer-text");

    function animate(el, delay) {
      setTimeout(() => {
        el.classList.remove("hidden");
        el.classList.add("fall");
      }, delay);
    }

    animate(text, 200);
    animate(laptop, 800);

    subIcons.forEach((icon, i) => animate(icon, 1600 + i * 400));

    animate(credit, 3000);

    setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, 4500);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">

        {/* ORDER EXACTLY LIKE IMAGE */}
        <i className="fa-solid fa-laptop-code fa-5x main-icon hidden"></i>

        {/* <h1 id="loading-text" className="hidden">MY PROFILE</h1> */}
         <h1 id="loading-text" className="text-3xl font-bold fall" >MY PROFILE</h1>

        <div className="sub-icons">
          <i className="fa-brands fa-github fa-2x hidden"></i>
          <i className="fa-solid fa-code fa-2x hidden"></i>
          <i className="fa-solid fa-user fa-2x hidden"></i>
        </div>

        <h2 id="designer-text" className="hidden font-2xl">Designed by Pranjali</h2>
      </div>
    </div>
  );
}
