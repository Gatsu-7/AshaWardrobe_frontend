import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Clothes Daan</h1>
      <div className="about-content">
        <section className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-description">
            {/* Clothes Daan is dedicated to reducing clothing waste by providing a
            platform where individuals can donate their unused clothes. Our
            mission is to promote sustainable fashion and support communities in
            need. */}
            Clothes Daan is a sustainable platform designed to facilitate the
            donation and reuse of clothing items. Our goal is to provide an easy
            and efficient way for individuals to donate their gently used
            clothes to those in need, thereby reducing waste and promoting
            sustainable fashion. By connecting donors with charitable
            organizations and individuals who can benefit from these donations,
            Clothes Daan aims to create a community-driven approach to
            tackling clothing waste.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            Donating clothes is simple. Just sign up, provide details about the
            items you wish to donate, and we'll handle the rest. We ensure that
            your donations reach those in need and make a positive impact on the
            environment.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Our Story</h2>
          <p className="section-description">
            Clothes Daan was founded with the belief that everyone can make a
            difference. We started with a small team passionate about
            sustainable living and have grown into a platform that connects
            donors with those in need.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            If you have any questions or need assistance, feel free to reach out
            to us. We’re here to help and ensure your donation experience is
            smooth and impactful.
          </p>
          <h2>Email: clothesdaan@gmail.com</h2>
        </section>
      </div>
    </div>
  );
};

export default About;
