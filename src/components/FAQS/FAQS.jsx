import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing the icons
import './FAQS.css';

const FAQS = () => {
  const [faqData, setFaqData] = useState([
    {
      question: 'What are the popular mobile phone accessories?',
      answer: 'Some popular mobile phone accessories include phone cases, screen protectors, chargers, headphones, and power banks.',
      open: false,
    },
    {
      question: 'How to choose the right phone case?',
      answer: 'To choose the right phone case, consider factors like compatibility, material, design, and protection level. Make sure it fits your phone model and suits your style and needs.',
      open: false,
    },
    {
      question: 'Are screen protectors necessary?',
      answer: 'Screen protectors are recommended to protect your phone screen from scratches and minor impacts. They are a useful accessory to prolong the life of your device.',
      open: false,
    },
    {
      question: 'What type of charger should I use for my phone?',
      answer: 'Its best to use the charger that came with your phone. If you need to buy a new one, choose a high-quality charger from a reputable brand to avoid potential damage to your device.',
      open: false,
    },
    {
      question: 'How can I extend my phone battery life?',
      answer: 'To extend your phone\'s battery life, you can reduce screen brightness, close background apps, and use power-saving mode. Additionally, using a power bank is a convenient way to keep your phone charged on the go.',
      open: false,
    },
  ]);

  const toggleAnswer = (index) => {
    const updatedFaqData = [...faqData];
    updatedFaqData[index].open = !updatedFaqData[index].open;
    setFaqData(updatedFaqData);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="question">
              <h2>{faq.question}</h2>
              <button
                onClick={() => toggleAnswer(index)}
                className={`toggle-button ${faq.open ? 'open' : ''}`}
              >
                +
              </button>
            </div>
            {faq.open && <p>{faq.answer}</p>}
          </div>

        ))}

        <div className="follow-us-container">
          <span>Follow Us:</span>
          <div className="social-icons">
            <a href="faicon">
              <FaFacebook className="icon" />
            </a>
            <a href="instaicon">
              <FaInstagram className="icon" />
            </a>
            <a href="twittericon">
              <FaTwitter className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>


  );
};

export default FAQS;









// Inside the component, an array named faqData is defined, containing FAQ items. Each item has a question, answer, and an open property, which is initially set to false.

// The toggleAnswer function takes an index as an argument and toggles the open property of the corresponding FAQ item to control the visibility of the answer.

// The component renders a container for the FAQ section with a title "Frequently Asked Questions."