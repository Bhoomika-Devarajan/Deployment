import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About Our Real Estate Management System</h1><br></br>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          Welcome to our Real Estate Management System, your ultimate solution for managing properties, clients, and transactions seamlessly. Our platform is designed to simplify the complexities of real estate management, making it easier for agents, property managers, and clients to interact and transact.
        </p>

        <h2>Key Features</h2>
        <br></br>
        <ul>
          <li>Comprehensive Property Listings: Easily manage and display all property listings with detailed descriptions, images, and pricing.</li>
          <li>Client Management: Maintain a database of clients, track their preferences, and manage communications effectively.</li>
          <li>Transaction Management: Streamline the process of buying, selling, and renting properties with our integrated transaction management system.</li>
          <li>Reporting and Analytics: Gain insights into your business performance with our robust reporting and analytics tools.</li>
          <li>Secure and Reliable: Ensure the safety and security of your data with our advanced security measures and reliable infrastructure.</li>
        </ul>
<br></br>
        <h2>Our Mission</h2>
        <br></br>
        <p>
          Our mission is to revolutionize the real estate industry by providing a platform that enhances efficiency, transparency, and customer satisfaction. We are committed to continuous innovation and improvement, ensuring that our system meets the evolving needs of the market.
        </p>
<br></br>
        <h2>Meet the Team</h2>
        <br></br><br></br>
        <div className="team">
        <div className="team-member">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg" alt="Team Member" />
            <h3>Sam Wilson</h3>
            <p>Head of Product</p>
          </div>
          {/* Add more team members as needed */}
        </div>
        <h2>Contact Us</h2>
        <p>
          Have any questions or need further information? Feel free to <a href="mailto:info@realestate.com">contact us</a>.
        </p>
       
      </motion.div>
    </div>
  );
};

export default About;
