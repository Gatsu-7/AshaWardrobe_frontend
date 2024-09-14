import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import FAQ from "./Faq";
import ImpactStatistics from "./Impact";
import Testimonials from "./Testimonials";
import DistributionProcess from "./Process";
import Footer from "../components/Footer";
import DonationGuidelines from "./Donation";
import sustain from "../assets/world.png";
import donate from "../assets/donate.png";
import support from "../assets/support.png";
import volunteer from "../assets/volunteer.png";
import PartnerOrganizations from "./Partners";

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <h1>Welcome to AshaWardrobe</h1>
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
          <img src={sustain} alt="" className="image-" />
        </div>
        <div className="feature-item">
          <h2>Easy Donations</h2>
          <p>Simple and straightforward process to donate clothes.</p>
          <img src={donate} alt="" className="image-" />
        </div>
        <div className="feature-item">
          <h2>Communities</h2>
          <p>Your donations reach those in need and make a real difference.</p>
          <img src={support} alt="" className="image-" />
        </div>
        <div className="feature-item">
          <h2>Opportunities</h2>
          <p>
            Join our team to help sort and distribute donations to those in
            need.
          </p>
          <img
            src={volunteer}
            alt="Volunteer Opportunities"
            className="image-"
          />
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
      <section>
        <PartnerOrganizations />
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
