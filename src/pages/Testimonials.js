import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Donating clothes through this platform was easy and fulfilling. I’m happy to know my clothes are helping others in need.",
    },
    {
      name: "Jane Smith",
      feedback:
        "The process was seamless, and it feels great to be part of something that impacts so many lives.",
    },
    {
      name: "Emily Johnson",
      feedback:
        "A wonderful initiative! I love how I can donate from the comfort of my home and make a difference.",
    },
  ];

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">What Our Donors Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
