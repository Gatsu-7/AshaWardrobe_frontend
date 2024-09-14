import React, { useState } from "react";
import "./VolunteerProgram.css";

const API_URL = process.env.REACT_APP_API_URL;

const VolunteerProgram = () => {
  const initialFormData = {
    name: "",
    email: "",
    purposeOfJoining: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}api/joinus`, {
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
  };

  return (
    <div className="volunteer-section">
      <h2 className="volunteer-title">Join Our Volunteer Program</h2>
      <p className="volunteer-description">
        Become a part of our mission to make a difference in the community. As a
        volunteer, you'll help sort, package, and distribute donated clothes to
        those in need.
      </p>

      <div className="volunteer-benefits">
        <h3 className="benefits-title">Benefits of Volunteering</h3>
        <ul className="benefits-list">
          <li>Make a positive impact in your community.</li>
          <li>Meet like-minded individuals passionate about helping others.</li>
          <li>Learn about sustainable clothing practices.</li>
          <li>Earn volunteer service hours for school or work.</li>
        </ul>
      </div>

      <div className="volunteer-signup">
        <h3 className="signup-title">Sign Up to Volunteer</h3>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="purposeOfJoining"
            placeholder="Why would you like to volunteer?"
            className="form-textarea"
            value={formData.purposeOfJoining}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerProgram;
