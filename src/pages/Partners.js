import React from "react";
import "./PartnerOrganizations.css"; // You can create a corresponding CSS file for styling
import helpinghands from "../assets/helpinghand.png";
import clothesfor from "../assets/clothesforall.png";
import scarf from "../assets/scarf.png";
import runner from "../assets/runner.png";
import service from "../assets/service.png";
import sun from "../assets/sun.png";
import eco from "../assets/eco.png";
import youth from "../assets/youth.png";
import heart from "../assets/heart.png";
import hope from "../assets/hope.png";

const partners = [
  {
    name: "Helping Hands Foundation",
    description:
      "A community-driven organization providing assistance to underprivileged families with essential clothing and supplies.",
    logo: helpinghands,
  },
  {
    name: "Clothes for All",
    description:
      "A global initiative aimed at reducing clothing waste by collecting and distributing donated clothes to those in need.",
    logo: clothesfor,
  },
  {
    name: "Warmth in Winter",
    description:
      "A seasonal drive focused on providing winter clothes and blankets to homeless shelters and individuals facing extreme cold.",
    logo: scarf,
  },
  {
    name: "Sustainable Fashion Movement",
    description:
      "Working towards a sustainable future by encouraging the reuse of clothes and responsible fashion practices.",
    logo: runner,
  },
  {
    name: "Local Community Outreach",
    description:
      "An organization dedicated to supporting local communities through various programs, including clothing drives and educational workshops.",
    logo: service,
  },
  {
    name: "Global Warmth Initiative",
    description:
      "A global network working to provide warmth and shelter to vulnerable populations by distributing clothes and blankets in disaster-affected regions.",
    logo: sun,
  },
  {
    name: "EcoClothes Network",
    description:
      "Focused on promoting eco-friendly clothing practices, this network encourages recycling and upcycling of clothes to reduce environmental impact.",
    logo: eco,
  },
  {
    name: "Youth Empowerment Fund",
    description:
      "An organization that supports underprivileged youth by providing necessary clothing and resources to help them succeed academically and socially.",
    logo: youth,
  },
  {
    name: "Heart & Soul Charity",
    description:
      "A charity dedicated to improving the lives of low-income families through comprehensive support, including clothing assistance and community events.",
    logo: heart,
  },
  {
    name: "Clothes for Hope",
    description:
      "Focused on offering hope and dignity through clothing donations to those affected by crises and economic hardship.",
    logo: hope,
  },
];

const PartnerOrganizations = () => {
  return (
    <div className="partners-section">
      <h1 className="partners-title">Our Partner Organizations</h1>
      <p className="partners-intro">
        We are proud to collaborate with several organizations to help us reach
        more people in need. Below are some of our amazing partners who work
        with us to distribute donations and promote sustainable practices.
      </p>

      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="partner-logo"
            />
            <h2 className="partner-name">{partner.name}</h2>
            <p className="partner-description">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerOrganizations;
