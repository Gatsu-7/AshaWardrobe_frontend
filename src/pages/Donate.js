import React, { useState } from "react";
import axios from "axios";
import "./Donate.css";

const Donate = () => {
  const initialFormData = {
    name: "",
    email: "",
    location: "",
    items: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/createuser", formData)
      .then((response) => {
        console.log(response.data);
        alert("Donation submitted successfully!");
        setFormData(initialFormData); // Reset form fields
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to submit donation");
      });
  };

  return (
    <div className="donate-container">
      <h1 className="donate-title">Donate Your Clothes</h1>
      <p className="donate-description">
        Help others by donating your used clothes.
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

        <label className="donate-label">Location:</label>
        <textarea
          className="donate-input"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        ></textarea>

        <label className="donate-label">Number of Clothing Items:</label>
        <textarea
          className="donate-input"
          name="items"
          value={formData.items}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="donate-button">
          Donate
        </button>
      </form>
    </div>
  );
};

export default Donate;
