import React, { useState } from 'react';
import './faq.css';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: "What is a Realty Management System?",
    answer: "A Realty Management System helps manage property listings, client interactions, and transactions efficiently. It streamlines property management processes and enhances customer experiences."
  },
  {
    question: "How do I list a property?",
    answer: "To list a property, you need to sign in to your account, navigate to the 'Properties' section, and click on 'Add Property'. Fill in the required details and submit the form."
  },
  {
    question: "How can I contact support?",
    answer: "You can contact our support team by filling out the contact form on the 'Contact Us' page. Our team will get back to you as soon as possible."
  },
  {
    question: "Can I edit my property listings?",
    answer: "Yes, you can edit your property listings by signing in to your account, navigating to the 'Properties' section, selecting the property you want to edit, and updating the details."
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we take data security seriously. Your personal information is encrypted and stored securely. We follow industry best practices to ensure your data is safe."
  },
  {
    question: "How do I reset my password?",
    answer: "To reset your password, click on 'Forgot Password' on the sign-in page and follow the instructions. You will receive an email with a link to reset your password."
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Here are some of the most common questions and answers about our Realty Management System.</p>
        </div>
        <div className="faq-content">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <motion.div
                className="faq-question"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onClick={() => toggleFAQ(index)}
              >
                <h2>{faq.question}</h2>
              </motion.div>
              <motion.div
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={activeIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default Faq;
