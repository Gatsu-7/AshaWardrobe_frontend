import React from "react";
import "./Impact.css";

const ImpactStatistics = () => {
  const stats = [
    { number: "10,000+", label: "Clothes Donated" },
    { number: "5,000+", label: "People Helped" },
    { number: "200+ Tons", label: "Waste Reduced" },
    { number: "50+", label: "Partner Organizations" },
  ];

  return (
    <div className="impact-section">
      <h2 className="impact-title">Our Impact</h2>
      <div className="impact-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-box">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStatistics;
