// import React, { useState } from "react";
// import axios from "axios";
// import "./Donate.css";

// // const API_URL = process.env.REACT_APP_API_URL;

// const Donate = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     location: "",
//     items: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post(`http://localhost:5000/api/createuser`, formData)
//       .then((response) => {
//         console.log(response.data);
//         alert("Donation submitted successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           location: "",
//           items: "",
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("Failed to submit donation");
//       });
//   };

//   return (
//     <div className="donate-container">
//       <h1 className="donate-title">Donate Your Clothes</h1>
//       <p className="donate-description">
//         Help others by donating your used clothes.
//       </p>
//       <form className="donate-form" onSubmit={handleSubmit}>
//         <label className="donate-label">Name:</label>
//         <input
//           type="text"
//           name="name"
//           className="donate-input"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <label className="donate-label">Email:</label>
//         <input
//           type="email"
//           name="email"
//           className="donate-input"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label className="donate-label">Location:</label>
//         <textarea
//           name="location"
//           className="donate-input"
//           value={formData.location}
//           onChange={handleChange}
//           required
//         ></textarea>

//         <label className="donate-label">Items:</label>
//         <textarea
//           name="items"
//           className="donate-input"
//           value={formData.items}
//           onChange={handleChange}
//           required
//         ></textarea>

//         <button type="submit" className="donate-button">
//           Donate
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Donate;

import React, { useState } from "react";
import "./Donate.css";

const API_URL = process.env.REACT_APP_API_URL;
// console.log(API_URL);

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    items: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}api/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          // If the response is not successful, throw an error
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log(data);
        alert("Donation submitted successfully!");
        setFormData({
          name: "",
          email: "",
          location: "",
          items: "",
        });
      })
      .catch((error) => {
        console.error("Error during submission:", error);
        alert("Failed to submit donation. Please try again later.");
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
          name="name"
          className="donate-input"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="donate-label">Email:</label>
        <input
          type="email"
          name="email"
          className="donate-input"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="donate-label">Location:</label>
        <textarea
          name="location"
          className="donate-input"
          value={formData.location}
          onChange={handleChange}
          required
        ></textarea>

        <label className="donate-label">Items:</label>
        <textarea
          name="items"
          className="donate-input"
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
