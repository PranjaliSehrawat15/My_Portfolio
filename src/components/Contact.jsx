const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Message sent!');
  };

  return (
    <section id="contact" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">CONTACT</p>
        <h1 className="text-4xl lg:text-5xl font-open-sans font-bold mb-12">Get in Touch with Us</h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 text-left">
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              I'm always open to discuss exciting projects and new opportunities. Let's collaborate!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <i className="fa-solid fa-envelope text-primary text-xl"></i>
                <span>amine@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <i className="fa-solid fa-phone text-primary text-xl"></i>
                <span>+213 00 11 22 33 44</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <i className="fa-solid fa-location-dot text-primary text-xl"></i>
                <span>Algeria, Boumerdes</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com/Saboo24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xl transition-all hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/amine-hamzaoui-a2453a35b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xl transition-all hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a 
                href="https://wa.me/213554139526" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xl transition-all hover:-translate-y-1 hover:bg-green-500 hover:text-white"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary bg-white dark:bg-gray-800"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary bg-white dark:bg-gray-800"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary bg-white dark:bg-gray-800 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-lg transition-all hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;