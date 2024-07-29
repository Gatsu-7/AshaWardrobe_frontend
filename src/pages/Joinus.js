import React, { useState } from "react";
import axios from "axios";
import "./Donate.css";

const Joinus = () => {
  const initialFormData = {
    name: "",
    email: "",
    address: "",
    educationQualification: "",
    purposeOfJoining: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/joinus", formData)
      .then((response) => {
        console.log(response.data);
        alert("Application submitted successfully!");
        setFormData(initialFormData); // Reset form fields
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to submit application");
      });
  };

  return (
    <div className="donate-container">
      <h1 className="donate-title">Share Your Credentials</h1>
      <p className="donate-description">
        Lend a helping hand in the greater good
      </p>
      <form className="donate-form" onSubmit={handleSubmit}>
        <label className="donate-label">Name:</label>
        <input
          type="text"
          className="donate-input"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="donate-label">Email:</label>
        <input
          type="email"
          className="donate-input"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="donate-label">Address:</label>
        <textarea
          className="donate-input"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <label className="donate-label">Education Qualification:</label>
        <textarea
          className="donate-input"
          name="educationQualification"
          value={formData.educationQualification}
          onChange={handleChange}
          required
        ></textarea>

        <label className="donate-label">Purpose of Joining:</label>
        <textarea
          className="donate-input"
          name="purposeOfJoining"
          value={formData.purposeOfJoining}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="donate-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Joinus;
