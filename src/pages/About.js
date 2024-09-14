import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        <section className="mission-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-description">
            At <strong>AshaWardrobe </strong>, our mission is to enhance the
            quality of life in our community by providing essential clothing to
            those in need. We are dedicated to creating a world where everyone
            has access to basic clothing necessities, fostering a sense of
            dignity and belonging for all.
          </p>
          <p className="section-description">
            We aim to create a positive impact through our clothing donation
            programs, sustainable practices, and community outreach efforts. Our
            goal is to ensure that every piece of clothing we distribute makes a
            meaningful difference in someone's life.
          </p>
        </section>

        <section className="values-section">
          <h2 className="section-title">Our Values</h2>
          <ul className="values-list">
            <li>
              <strong>Compassion:</strong> We approach our work with empathy and
              kindness, understanding the needs of those we serve.
            </li>
            <li>
              <strong>Integrity:</strong> We operate transparently and honestly,
              ensuring that every donation is handled with care and respect.
            </li>
            <li>
              <strong>Sustainability:</strong> We are committed to
              environmentally friendly practices, promoting the reuse and
              recycling of clothing.
            </li>
            <li>
              <strong>Community:</strong> We believe in the power of community
              and work to build strong connections with those we support.
            </li>
          </ul>
        </section>

        <section className="history-section">
          <h2 className="section-title">Our History</h2>
          <p className="section-description">
            Founded in <strong>2024</strong>, <strong>AshaWardrobe </strong>
            began with a simple yet profound vision: to address clothing
            insecurity and promote dignity through the power of donation. Over
            the years, we have grown from a small local initiative into a
            respected organization with a far-reaching impact.
          </p>
          <p className="section-description">
            Our journey has been marked by numerous milestones, including the
            expansion of our donation centers, partnerships with local
            businesses, and successful community outreach programs. Each step
            has brought us closer to our goal of making a significant difference
            in people's lives.
          </p>
        </section>

        <section className="team-section">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="/images/team-member1.jpg"
                alt="John Doe"
                className="team-photo"
              />
              <h3 className="team-name">John Doe</h3>
              <p className="team-role">Founder & CEO</p>
              <p className="team-bio">
                John is the visionary behind our organization, with a background
                in nonprofit management and community service. His dedication to
                social change drives our mission forward, and his leadership
                inspires our team to strive for excellence every day.
              </p>
            </div>
            <div className="team-member">
              <img
                src="/images/team-member2.jpg"
                alt="Jane Smith"
                className="team-photo"
              />
              <h3 className="team-name">Jane Smith</h3>
              <p className="team-role">Program Director</p>
              <p className="team-bio">
                Jane manages our clothing donation programs and ensures
                efficient operations. Her expertise in program development and
                her commitment to service ensure that every donation reaches
                those who need it most.
              </p>
            </div>
            <div className="team-member">
              <img
                src="/images/team-member3.jpg"
                alt="Michael Lee"
                className="team-photo"
              />
              <h3 className="team-name">Michael Lee</h3>
              <p className="team-role">Volunteer Coordinator</p>
              <p className="team-bio">
                Michael is responsible for recruiting, training, and managing
                our volunteers. His passion for community engagement and his
                organizational skills help us maintain a strong and dedicated
                volunteer network.
              </p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        <section className="contact-section">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            We are here to answer your questions and provide any information you
            need. Whether you want to learn more about our programs, get
            involved, or simply reach out, feel free to contact us using the
            information below.
          </p>
          <ul className="contact-info">
            <li>
              Email:{" "}
              <a href="mailto:info@ashawardrobe.com">info@ashawardrobe.com</a>
            </li>
            <li>Phone: +91 (123) 456-7890</li>
            <li>Address: 24 Church Road, Janakpuri, New Delhi</li>
          </ul>
          <p className="section-description">
            Follow us on social media for updates and news:
          </p>
          <ul className="social-media">
            <li>
              <a
                href="https://facebook.com/yourorganization"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourorganization"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/yourorganization"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
