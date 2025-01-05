import React from "react";
import "../css/contact.css";

function ContactForm() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form className="contact-form">
          <input type="text" className="form-input" placeholder="Your name" />
          <input type="email" className="form-input" placeholder="Your email" />
          <textarea className="form-textarea" placeholder="Your message"></textarea>
          <button type="submit" className="form-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;