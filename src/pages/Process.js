import React from "react";
import "./DistributionProcess.css";

const DistributionProcess = () => {
  return (
    <div className="distribution-section">
      <h2 className="distribution-title">How We Distribute Your Donations</h2>
      <div className="distribution-steps">
        <div className="step">
          <div className="step-number">1</div>
          <h3 className="step-title">Clothing Collection</h3>
          <p className="step-description">
            After you donate, our team collects the clothes either through
            scheduled pickups or at designated drop-off points.
          </p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3 className="step-title">Sorting and Inspection</h3>
          <p className="step-description">
            The donated clothes are sorted and inspected to ensure they are in
            good condition and fit for use.
          </p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3 className="step-title">Distribution to Partner Organizations</h3>
          <p className="step-description">
            We partner with local charities, shelters, and community
            organizations that distribute the clothes to individuals and
            families in need.
          </p>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <h3 className="step-title">Direct Community Outreach</h3>
          <p className="step-description">
            In some cases, our team directly organizes community outreach
            programs where we distribute clothes in person to those in need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DistributionProcess;
