import React, { useState } from "react";
import "./RequestAssistance.css";
import ask from "../assets/ask.png";
const API_URL = process.env.REACT_APP_API_URL;

const RequestAssistance = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    assistanceType: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}api/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Application submitted successfully!");
        setFormData(initialFormData); // Reset form fields
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to submit application");
      });
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="request-assistance-section">
      <h1 className="request-title">Request Assistance</h1>
      <p className="request-description">
        If you or someone you know is in need of clothing or other assistance,
        please fill out the form below, and we will get back to you as soon as
        possible.
      </p>

      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank you for your request!</h2>
          <p>We have received your application and will contact you shortly.</p>
        </div>
      ) : (
        <form className="request-form" onSubmit={handleSubmit}>
          {/* <label htmlFor="name" className="form-label">
            Full Name
          </label> */}
          <input
            placeholder="Full Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />

          {/* <label htmlFor="email" className="form-label">
            Email Address
          </label> */}
          <input
            placeholder="Email Address"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />

          {/* <label htmlFor="phone" className="form-label">
            Phone Number
          </label> */}
          <img
            src={ask}
            alt=""
            className="scale-img"
            style={{
              position: "absolute",
              top: "35%",
              right: "100px",
              height: "300px",
              width: "300px",
            }}
          />
          <input
            placeholder="Phone Number"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />

          <label htmlFor="assistanceType" className="form-label">
            Type of Assistance
          </label>
          <select
            placeholder="Type of Assistance"
            id="assistanceType"
            name="assistanceType"
            value={formData.assistanceType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="clothing">Clothing</option>
            <option value="shelter">Shelter</option>
            <option value="food">Food</option>
            <option value="other">Other</option>
          </select>

          {/* <label htmlFor="message" className="form-label">
            Message
          </label> */}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Please describe your needs..."
            required
          ></textarea>

          <button type="submit" className="submit-button">
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
};

export default RequestAssistance;
