const Services = () => {
  const services = [
    {
      icon: "/images/web.svg",
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi soluta est veniam sequi nemo."
    },
    {
      icon: "/images/app.svg",
      title: "App Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi soluta est veniam sequi nemo."
    },
    {
      icon: "/images/dm.svg",
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi soluta est veniam sequi nemo."
    },
    {
      icon: "/images/seo.svg",
      title: "Email Marketing",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi soluta est veniam sequi nemo."
    }
  ];

  return (
    <section id="services" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">SERVICES</p>
        <h1 className="text-4xl lg:text-5xl font-open-sans font-bold mb-4">Our Features & Services</h1>
        <hr className="w-1/4 mx-auto border-gray-300 dark:border-gray-600 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center relative overflow-hidden card-hover service-card"
            >
              <img 
                src={service.icon} 
                alt={service.title}
                className="w-20 h-20 mx-auto mb-6"
              />
              
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-400 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;