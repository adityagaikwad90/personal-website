import React, { useRef } from 'react';
import './Contacts.css';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_eu98qt8',     // replace with your actual service ID
      'template_1tvi9sl',    // replace with your actual template ID
      form.current,
      'eqEPhNnrKxazQGIEt'         // replace with your public key or user ID
    ).then(() => {
      alert("✅ Message sent successfully!");
      form.current.reset();
    }).catch(() => {
      alert("❌ Something went wrong. Please try again.");
    });
  };

  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-title">Let's Get in Touch</h2>
      <p className="contact-subtitle">I'd love to hear from you. Drop a message!</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
        <button type="submit" className="send-btn">Send Message</button>
      </form>
    </section>
  );
};
export default Contacts;

