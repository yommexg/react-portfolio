import { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

import "./contact.css";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const phoneNumber = "+2348153192058";
const message = "Hello, Welcome to The Anime Code Lord";

const whatsapp_url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>animecodelord@gmail.com</h5>
            <a
              href="mailto:animecodelord@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Click Here to Send Message
            </a>
          </article>
          <article className="contact-option">
            <FaFacebookMessenger className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Anime Code Lord</h5>
            <a
              href="https://m.me/AnimeCodeLord"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Click Here to Send Message
            </a>
          </article>
          <article className="contact-option">
            <FaWhatsapp className="contact-option-icon" />
            <h4>Whatspp</h4>
            <h5>+2348153192058</h5>
            <a
              href={whatsapp_url}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Click Here to Send Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows="7"
            required
          />
          <button type="submit" className="btn btn-primary">
            Enter
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
