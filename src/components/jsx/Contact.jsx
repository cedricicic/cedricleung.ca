import React from "react";
import "../css/contact.css";

const ContactForm = () => {
  return (
    <div className="contact-page">
      <div className="contact-form">
        <h1>Contact Me</h1>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message"></textarea>
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
};

export default ContactForm;