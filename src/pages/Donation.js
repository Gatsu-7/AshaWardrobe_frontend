import React from "react";
import "./DonationGuidelines.css";
import Donate from "./Donate";
import accept from "../assets/accepted.png";
import notaccept from "../assets/notaccept.png";
import prepare from "../assets/prepare.png";
import InteractiveDonationMap from "../components/Interactivedonation";

const DonationGuidelines = () => {
  return (
    <div className="donation-guidelines-section">
      <h1 className="donation-guidelines-title">Donation Guidelines</h1>
      <div className="donation-guidelines-content">
        <section className="guidelines-intro">
          <h2 className="d-section-title">Welcome to Our Donation Program</h2>
          <p className="section-description">
            Thank you for your interest in donating clothes to AshaWardrobe.
            Your generosity helps us provide essential clothing to those in
            need. To ensure that your donations are handled effectively and
            reach those who need them most, please follow these guidelines.
          </p>
        </section>

        <section className="accepted-items">
          <h2 className="d-section-title">Accepted Items</h2>
          <div className="ai">
            <div className="ai-content">
              <ul className="items-list">
                <li>
                  Gently used clothing for all ages (adults, children, and
                  infants)
                </li>
                <li>New clothing with tags</li>
                <li>Coats, jackets, and sweaters</li>
                <li>Shoes and boots</li>
                <li>Bedding and blankets</li>
                <li>Accessories such as hats, scarves, and gloves</li>
              </ul>
            </div>
            <div className="img-div">
              <img src={accept} alt="" className="img" />
            </div>
          </div>
        </section>

        <section className="not-accepted-items">
          <h2 className="d-section-title">Items We Cannot Accept</h2>
          <div className="ai">
            <div className="ai-content">
              <ul className="items-list">
                <li>Clothing that is heavily worn or damaged</li>
                <li>Items with stains, tears, or holes</li>
                <li>
                  Underwear and socks (unless new and in original packaging)
                </li>
                <li>Items from smoke or pet-filled homes</li>
                <li>Perishable items</li>
                <li>Household items or furniture</li>
              </ul>
            </div>
            <div className="img-div">
              <img src={notaccept} alt="" className="img" />
            </div>
          </div>
        </section>

        <section className="preparing-donations">
          <h2 className="d-section-title">How to Prepare Your Donations</h2>
          <div className="ai">
            <div className="ai-content">
              <ul className="preparation-tips">
                <li>Ensure that all items are clean and in good condition.</li>
                <li>Fold clothes neatly and pack them in bags or boxes.</li>
                <li>Check for Missing Buttons or Broken Zippers</li>

                <li>
                  Label your donation bag or box with its contents if possible.
                </li>
                <li>
                  Consider including a brief note about the items if you have
                  specific details.
                </li>
                <li>
                  Drop off your donations at our designated donation centers or
                  schedule a pickup if available.
                </li>
              </ul>
            </div>
            <div className="img-div">
              <img src={prepare} alt="" className="img" />
            </div>
          </div>
        </section>
        <section>
          <div className="map">
            <div>
              <h1 className="map-title">Donate and Make a Difference</h1>
              <p className="map-description">
                See how your donations are helping people across the country.
              </p>
              <InteractiveDonationMap />
            </div>
          </div>
        </section>
        <section>
          <Donate />
        </section>

        <section className="contact-for-donations">
          <h2 className="d-section-title">Contact Us for Donations</h2>
          <p className="section-description">
            If you have any questions about our donation guidelines or need
            assistance with your donation, please feel free to contact us:
          </p>
          <ul className="contact-info">
            <li>
              Email:
              <a href="mailto:donate@ashawardrobe.com">
                donate@ashawardrobe.com
              </a>
            </li>
            <li>Phone: +91 (123) 456-7890</li>
            <li>Address: 24 Church Road, Janapuri, New Delhi, India</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DonationGuidelines;
