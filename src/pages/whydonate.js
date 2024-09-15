import React from "react";
import "./WhyDonate.css";
import help from "../assets/help.png";
import reduce from "../assets/reduce.png";
import comm from "../assets/comm.png";
import dec from "../assets/dec.png";
import kind from "../assets/kind.png";
import enc from "../assets/enc.png";
import well from "../assets/wellbeing.png";
import tax from "../assets/tax.png";

const WhyDonate = () => {
  return (
    <section className="why-donate-section">
      <div className="why-donate-container">
        <h2 className="why-donate-title">Why Donate Clothes?</h2>
        <p className="why-donate-description">
          Your donations can make a significant impact in the lives of those in
          need. Here’s why donating matters:
        </p>

        <div className="donate-reasons">
          <div className="reason-item">
            <h3 className="reason-title">1. Help Those in Need</h3>
            <p className="reason-description">
              By donating your gently used clothes, you directly provide
              resources to people who can’t afford new clothing.
            </p>
            <div className="div-img">
              <img src={help} alt="" className="image-" />
            </div>
          </div>

          <div className="reason-item">
            <h3 className="reason-title">2. Reduce Waste</h3>
            <p className="reason-description">
              Donating helps reduce the amount of clothing waste that ends up in
              landfills, contributing to a more sustainable environment.
            </p>
            <div className="div-img">
              <img src={reduce} alt="" className="image-" />
            </div>
          </div>

          <div className="reason-item">
            <h3 className="reason-title">3. Support Local Communities</h3>
            <p className="reason-description">
              Your donations help support local communities by providing
              essential items to those struggling with poverty.
            </p>
            <div className="div-img">
              <img src={comm} alt="" className="image-" />
            </div>
          </div>

          <div className="reason-item">
            <h3 className="reason-title">4. Declutter Your Home</h3>
            <p className="reason-description">
              Donating items you no longer need helps you declutter and make
              space in your home, while giving your clothes a second life.
            </p>
            <div className="div-img">
              <img src={dec} alt="" className="image-" />
            </div>
          </div>

          <div className="reason-item">
            <h3 className="reason-title">5. Spread Kindness</h3>
            <p className="reason-description">
              Donating is an act of kindness and compassion, showing you care
              for others in need and contributing to a positive change in
              society.
            </p>
            <div className="div-img">
              <img src={kind} alt="" className="image-" />
            </div>
          </div>
          <div className="reason-item">
            <h3 className="reason-title">6. Encourage a Culture of Giving</h3>
            <p className="reason-description">
              By donating, you inspire others to do the same, fostering a
              culture of generosity and making the world a better place for
              everyone.
            </p>
            <div className="div-img">
              <img src={enc} alt="" className="image-" />
            </div>
          </div>
          <div className="reason-item">
            <h3 className="reason-title">7. Boost Emotional Well-being</h3>
            <p className="reason-description">
              Donating can bring a sense of fulfillment and emotional
              satisfaction, knowing that your actions are making a positive
              difference in the lives of others.
            </p>
            <div className="div-img">
              <img src={well} alt="" className="image-" />
            </div>
          </div>
          <div className="reason-item">
            <h3 className="reason-title">8. Tax Benefits</h3>
            <p className="reason-description">
              In many countries, donations to recognized charities are
              tax-deductible, providing financial benefits while supporting a
              good cause.
            </p>
            <div className="div-img">
              <img src={tax} alt="" className="image-" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDonate;
