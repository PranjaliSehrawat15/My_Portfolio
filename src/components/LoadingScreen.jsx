import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onLoadingComplete(), 500);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center flex-col z-50 transition-opacity duration-500">
      <div className="text-center text-blue-400">
        <i className="fa-solid fa-laptop-code text-8xl mb-8 fall"></i>
        <h1 className="text-4xl font-bold mb-8 fall">MY PROFILE</h1>
        
        <div className="flex justify-center gap-6 mb-8">
          <i className="fa-brands fa-github text-2xl fall" style={{ animationDelay: '1600ms' }}></i>
          <i className="fa-solid fa-code text-2xl fall" style={{ animationDelay: '2000ms' }}></i>
          <i className="fa-solid fa-user text-2xl fall" style={{ animationDelay: '2400ms' }}></i>
        </div>

        <h2 className="text-xl fall" style={{ animationDelay: '2800ms' }}>Designed by Amine</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;