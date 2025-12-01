
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
