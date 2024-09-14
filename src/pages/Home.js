import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import FAQ from "./Faq";
import ImpactStatistics from "./Impact";
import Testimonials from "./Testimonials";
import DistributionProcess from "./Process";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <h1>Welcome to Clothes Daan</h1>
        <p>
          Make a difference by donating your clothes and helping those in need.
        </p>
        <Link to="/donate" className="hero-button">
          Donate Now
        </Link>
      </section>

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

      <section>
        <DistributionProcess />
      </section>

      <section className="call-to-action">
        <h2>Join Us Today</h2>
        <p>
          Be a part of the change. Let's create a better world for all of us.
        </p>
        <Link to="/donate">Get Started</Link>
      </section>

      <section className="impact">
        <ImpactStatistics />
      </section>

      <section className="testimonials">
        <Testimonials />
      </section>

      <section className="faq">
        <FAQ />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
