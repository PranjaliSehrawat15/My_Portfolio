
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
