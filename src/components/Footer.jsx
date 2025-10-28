const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-montserrat mb-6">Amine</h2>
        
        <ul className="flex flex-wrap justify-center gap-6 mb-6">
          {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-primary transition-colors font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 mb-6">
          <a 
            href="https://github.com/Saboo24" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors text-lg"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/amine-hamzaoui-a2453a35b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors text-lg"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a 
            href="https://wa.me/213554139526" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors text-lg"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          &copy; 2025 Amine. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;