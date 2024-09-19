import React, { useState, useEffect } from "react";
import "./SustainabilityTracker.css";
import sus from "../assets/sus.png";
const SustainabilityTracker = () => {
  const [donations, setDonations] = useState(0); // Total number of clothes donated
  const [waterSaved, setWaterSaved] = useState(0); // Water saved in liters
  const [carbonSaved, setCarbonSaved] = useState(0); // CO2 saved in kg

  // Simulate data retrieval (replace with actual data fetching logic)
  useEffect(() => {
    // Example data (can be fetched from an API or backend)
    const donationCount = 50; // Number of donated clothes (dummy data)
    const waterSavedPerItem = 2700; // Average liters of water saved per clothing item
    const carbonSavedPerItem = 3.6; // Average kg of CO2 saved per clothing item

    setDonations(donationCount);
    setWaterSaved(donationCount * waterSavedPerItem);
    setCarbonSaved(donationCount * carbonSavedPerItem);
  }, []);

  return (
    <div className="sustainability-tracker">
      <div className="title-div">
        <div>
          <h2>Sustainability Tracker</h2>
          <p>Track the impact of your donations on the environment!</p>
        </div>
        <img src={sus} alt="" className="img-tit" />
      </div>

      <div className="tracker-statistics">
        <div className="stat-item">
          <h3>{donations}</h3>
          <p>Items Donated</p>
        </div>
        <div className="stat-item">
          <h3>{waterSaved.toLocaleString()}</h3>
          <p>Liters of Water Saved</p>
        </div>
        <div className="stat-item">
          <h3>{carbonSaved.toFixed(2)}</h3>
          <p>Kg of CO2 Saved</p>
        </div>
      </div>

      <div className="progress-bars">
        <div className="progress-bar">
          <label>Donation Goal (100 items)</label>
          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${(donations / 100) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="progress-bar">
          <label>Water Saved Goal (300,000 liters)</label>
          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${(waterSaved / 300000) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="progress-bar">
          <label>CO2 Emission Reduction Goal (360 kg)</label>
          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${(carbonSaved / 360) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityTracker;
