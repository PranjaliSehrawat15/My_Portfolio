// const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     alert('Message sent!');
//   };

//   return (
//     <section id="contact" className="py-20 section-padding">
//       <div className="max-w-7xl mx-auto text-center">
//         <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">CONTACT</p>
//         <h1 className="text-4xl lg:text-5xl font-open-sans font-bold mb-12">Get in Touch with Us</h1>

//         <div className="flex flex-col lg:flex-row gap-12 items-start">
//           <div className="flex-1 text-left">
//             <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
//               I'm always open to discuss exciting projects and new opportunities. Let's collaborate!
//             </p>

//             <div className="space-y-6 mb-8">
//               <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
//                 <i className="fa-solid fa-envelope text-primary text-xl"></i>
//                 <span>amine@example.com</span>
//               </div>
//               <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
//                 <i className="fa-solid fa-phone text-primary text-xl"></i>
//                 <span>+213 00 11 22 33 44</span>
//               </div>
//               <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
//                 <i className="fa-solid fa-location-dot text-primary text-xl"></i>
//                 <span>, Boumerdes</span>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <a 
//                 href="https://github.com/Saboo24" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xl transition-all hover:-translate-y-1 hover:bg-black hover:text-white"
//               >
//                 <i className="fa-brands fa-github"></i>
//               </a>
//               <a 
//                 href="https://www.linkedin.com/in/amine-hamzaoui-a2453a35b" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xl transition-all hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
//               >
//                 <i className="fa-brands fa-linkedin"></i>
//               </a>
//               <a 
//                 href="https://wa.me/213554139526" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xl transition-all hover:-translate-y-1 hover:bg-green-500 hover:text-white"
//               >
//                 <i className="fa-brands fa-whatsapp"></i>
//               </a>
//             </div>
//           </div>

//           <div className="flex-1">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary bg-white dark:bg-gray-800"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary bg-white dark:bg-gray-800"
//                 />
//               </div>
//               <div>
//                 <textarea
//                   placeholder="Your Message"
//                   rows="5"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary bg-white dark:bg-gray-800 resize-none"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-primary text-white px-8 py-3 rounded-lg transition-all hover:bg-blue-700"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
//   const formRef = useRef();
//   const [loading, setLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState("");

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//     try {
//       await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

//       setStatusMessage("🎉 Message sent successfully!");
//       formRef.current.reset();
//     } catch (error) {
//       console.error(error);
//       setStatusMessage("❌ Failed to send message. Please try again.");
//     }

//     setLoading(false);

//     setTimeout(() => setStatusMessage(""), 5000); // auto-hide message
//   };

//   return (
//     <section id="contact" className="py-20">
//       <div className="max-w-7xl mx-auto text-center">
//         <p className="text-sm text-gray-400 mb-2">CONTACT</p>
//         <h1 className="text-4xl font-bold mb-10">Get in Touch</h1>

//         {statusMessage && (
//           <div className="mb-6 text-primary font-semibold">{statusMessage}</div>
//         )}

//         <form ref={formRef} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-6">
//           <input
//             name="user_name"
//             type="text"
//             placeholder="Your Name"
//             required
//             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary"
//           />

//           <input
//             name="user_email"
//             type="email"
//             placeholder="Your Email"
//             required
//             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary"
//           />

//           <textarea
//             name="message"
//             rows="5"
//             placeholder="Your Message"
//             required
//             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary resize-none"
//           ></textarea>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`px-6 py-3 rounded-lg transition text-white ${
//               loading ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-blue-700"
//             }`}
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
//   const formRef = useRef();
//   const [loading, setLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState("");

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await emailjs.sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       );

//       setStatusMessage("🎉 Your message has been sent successfully!");
//       formRef.current.reset();
//     } catch (err) {
//       setStatusMessage("❌ Something went wrong. Please try again.");
//       console.error(err);
//     }

//     setLoading(false);
//     setTimeout(() => setStatusMessage(""), 4000);
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <h4 className="contact-label">CONTACT</h4>
//       <h2 className="contact-title">Get in Touch with Me</h2>

//       <div className="contact-wrapper">

//         {/* LEFT SECTION */}
//         <div className="contact-left">
//           <p>
//             I'm always open to discussing exciting projects and opportunities.
//             Let's connect!
//           </p>

//           <ul className="contact-details">
//             <li><i className="fa-solid fa-envelope"></i> pranjalisehrawat@gmail.com</li>
//             <li><i className="fa-solid fa-phone"></i> +91 9548286343</li>
//             <li><i className="fa-solid fa-location-dot"></i> Ghaziabad, India</li>
//           </ul>

//           <div className="social-links">
//             <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-linkedin"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-whatsapp"></i></a>
//           </div>
//         </div>

//         {/* RIGHT SECTION - FORM */}
//         <form ref={formRef} onSubmit={sendEmail} className="contact-form">
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             required
//           />
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message..."
//             rows="6"
//             required
//           ></textarea>

//           <button type="submit" disabled={loading}>
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {statusMessage && <p className="status">{statusMessage}</p>}
//         </form>

//       </div>
//     </section>
//   );
// }


import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatusMessage("🎉 Your message has been sent!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatusMessage("❌ Failed to send message, please try again.");
    }

    setLoading(false);

    setTimeout(() => setStatusMessage(""), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <p className="contact-label">CONTACT</p>
      <h2 className="contact-title">Get in Touch with Me</h2>

      <div className="contact-wrapper">

        {/* LEFT SECTION */}
        <div className="contact-left">
          <p className="contact-text">
            I'm always open to discussing exciting projects and new
            opportunities. Let's connect!
          </p>

          <ul className="contact-details">
            <li><i className="fa-solid fa-envelope"></i> pranjalisehrawat@gmail.com</li>
            <li><i className="fa-solid fa-phone"></i> +91 9548286343</li>
            <li><i className="fa-solid fa-location-dot"></i> Ghaziabad, India</li>
          </ul>

          {/* Social Icons */}
          <div className="social-links">
            <a href="https://github.com/PranjaliSehrawat15" className="icon github">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/pranjali-sehrawat-b90557328/" className="icon linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://wa.me/919548286343" className="icon whatsapp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message..." required></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && <p className="status">{statusMessage}</p>}
        </form>
      </div>
    </section>
  );
}
