import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
      if (input.trim() !== '') {
          const newMessages = [...messages, { text: input, sender: 'user' }];
          setMessages(newMessages);
          setInput('');

          // Basic bot response logic
          const lowerCaseInput = input.toLowerCase();
          let botResponse = '';

          if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
              botResponse = 'Hello! How can I assist you today?';
          } else if (lowerCaseInput.includes('buy') || lowerCaseInput.includes('purchase')) {
              botResponse = 'Are you looking to buy a property? I can help with that!';
          } else if (lowerCaseInput.includes('services')) {
              botResponse = 'Our realty management company offers a wide range of services, including property listing, tenant management, rent collection, property maintenance, and real estate investment advisory.';
          } else if (lowerCaseInput.includes('contact')) {
              botResponse = 'You can reach our customer support team by calling (123) 456-7892, emailing support@realtycompany.com, or using the live chat feature on our website. We are here to assist you with any questions or concerns.';
          } else if (lowerCaseInput.includes('mortgage')) {
              botResponse = 'I can provide information on mortgage options. What do you need to know?';
          } else {
              botResponse = 'I\'m sorry, I didn\'t quite understand that. Could you please rephrase?';
          }

          // Simulate bot response delay
          setTimeout(() => {
              setMessages((prevMessages) => [
                  ...prevMessages,
                  { text: botResponse, sender: 'bot' }
              ]);
          }, 1000);
      }
  };
    return (
        <div className="chatbot">
            <div className="chatbot-header">
                <h2>RealtyBot</h2>
            </div>
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`chatbot-message ${
                            message.sender === 'user' ? 'user' : 'bot'
                        }`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chatbot-input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatbot-input"
                    placeholder="Type your message here..."
                />
                <button onClick={handleSend} className="chatbot-button">
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
