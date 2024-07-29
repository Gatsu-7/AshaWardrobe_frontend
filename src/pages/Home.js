import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Clothes Daan</h1>
        <p>
          Make a difference by donating your clothes and helping those in need.
        </p>
        <Link to="/donate" className="hero-button">
          Donate Now
        </Link>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-item">
          <h2>Sustainable Impact</h2>
          <p>Reduce clothing waste and promote sustainable fashion.</p>
        </div>
        <div className="feature-item">
          <h2>Easy Donations</h2>
          <p>Simple and straightforward process to donate clothes.</p>
        </div>
        <div className="feature-item">
          <h2>Support Communities</h2>
          <p>Your donations reach those in need and make a real difference.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Join Us Today</h2>
        <p>
          Be a part of the change. Let's create a better world for all of us.
        </p>
        <Link to="/donate">Get Started</Link>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Clothes Daan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
