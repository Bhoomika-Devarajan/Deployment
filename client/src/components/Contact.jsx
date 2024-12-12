import React from 'react';
import './contact.css';
import { motion } from 'framer-motion';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Please fill out the form below and we'll get in touch with you shortly.</p>
        </motion.div>
        
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </motion.div>
      </div>
      
    </div>
  );
};

export default Contact;
