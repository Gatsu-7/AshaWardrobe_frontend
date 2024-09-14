import React, { useState } from "react";
import "./Faq.css"; // Import the CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the process to donate clothes?",
      answer:
        "You can donate clothes by signing up on our website, selecting your location, and scheduling a pickup or dropping them at designated collection points.",
    },
    {
      question: "Are there any clothes that you don't accept?",
      answer:
        "We do not accept torn, stained, or heavily worn clothes. Please ensure that the items are in good, reusable condition.",
    },
    {
      question: "Can I volunteer to help with donations?",
      answer:
        "Yes, you can sign up as a volunteer on our website to help with sorting, packaging, and distributing clothes to those in need.",
    },
    {
      question: "How do you distribute the donated clothes?",
      answer:
        "We work with local charities and shelters to distribute clothes to individuals and families in need.",
    },
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "show" : ""}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
