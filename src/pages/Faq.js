import React, { useState } from "react";
import "./Faq.css"; // Import the CSS file
import faq from "../assets/question.png";
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
      question: "Can I volunteer to help with donations?",
      answer:
        "Yes, you can sign up as a volunteer on our website to help with sorting, packaging, and distributing clothes to those in need.",
    },
    {
      question: "What types of clothes can I donate?",
      answer:
        "We accept a wide range of gently used clothing for all ages, including shirts, pants, jackets, dresses, shoes, and accessories. Please ensure that the clothes are in good, wearable condition—free from stains, rips, or excessive wear.",
    },
    {
      question: "How do I know my donation is reaching those in need?",
      answer:
        "Once your donation is processed, we distribute the clothes to verified local charities, shelters, and community organizations. We maintain transparency throughout the process, and you can even track how your donation is making a difference via our “Track Your Impact” feature.",
    },
    {
      question: "Can I donate clothes that are out of season?",
      answer:
        "Yes! We accept clothes year-round, regardless of the season. Even if the items are out of season, we store them until they’re needed, ensuring they reach the right hands when the time comes.",
    },
    {
      question: "Are there any items you do not accept?",
      answer:
        "We do not accept damaged or excessively worn clothes, undergarments, or items made from hazardous materials. Please review our Donation Guidelines for more information on what can and cannot be donated.",
    },
    {
      question: "Can I donate other items besides clothes?",
      answer:
        "At this time, we primarily focus on clothing donations. However, we sometimes accept shoes and accessories depending on the current needs of the community. You can check our latest announcements for updates on other items we are accepting.",
    },
    {
      question: "Do you offer pick-up services for donations?",
      answer:
        "Yes, we offer pick-up services in select areas for large donations. You can schedule a pick-up through our website or contact our team for more information.",
    },
    {
      question: "How can I volunteer to help with donations?",
      answer:
        "We’re always looking for passionate volunteers to help sort, package, and distribute clothes. You can sign up through our Volunteer Program section and start making an impact today.",
    },
    {
      question: "Can I donate clothes from multiple locations?",
      answer:
        "Yes! You can donate clothes from any location that is convenient for you. We have several donation centers and drop-off points across the city. Check our 'Donation Locations' page for more details.",
    },
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <img
        src={faq}
        alt=""
        className="scale-img"
        style={{
          position: "absolute",
          bottom: "-705%",
          right: "50px",
          height: "200px",
          width: "200px",
        }}
      />
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
