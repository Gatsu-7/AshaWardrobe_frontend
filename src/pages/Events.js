import React from "react";
import "./EventsDrives.css"; // Create a separate CSS file for styling or use inline styles
import events from "../assets/events.png";
const eventsData = [
  {
    title: "Winter Clothes Donation Drive",
    date: "December 15, 2024",
    location: "Community Center, Delhi",
    description:
      "Join us to donate winter clothing for underprivileged families. We are collecting jackets, sweaters, blankets, and other warm clothing items.",
  },
  {
    title: "School Uniform Collection",
    date: "January 10, 2025",
    location: "City Hall, Mumbai",
    description:
      "Help us provide school uniforms for children in need. We are accepting gently used or new school uniforms for all age groups.",
  },
  {
    title: "Festive Clothes Drive",
    date: "October 20, 2024",
    location: "Youth Center, Bangalore",
    description:
      "Spread joy this festive season by donating traditional clothing items. We are collecting ethnic wear for families in need.",
  },
  {
    title: "Back-to-School Clothes Drive",
    date: "February 5, 2025",
    location: "Public Library, Kolkata",
    description:
      "Support students by donating clothes for their school year. We need shoes, socks, uniforms, and casual wear for children between 5 and 16 years old.",
  },
  {
    title: "Summer Clothing Collection",
    date: "April 25, 2025",
    location: "City Park, Hyderabad",
    description:
      "Help us collect light, breathable clothing for families living in hot climates. We are accepting T-shirts, cotton dresses, and shorts.",
  },
  {
    title: "Monsoon Relief Clothing Drive",
    date: "July 15, 2025",
    location: "Greenfield Plaza, Chennai",
    description:
      "Donate waterproof clothing, raincoats, and boots to help people stay dry and protected during the monsoon season.",
  },
  {
    title: "Blanket & Coat Collection",
    date: "November 30, 2024",
    location: "Old Town Hall, Jaipur",
    description:
      "Prepare for the winter by donating blankets and coats to those in need. We are particularly looking for warm, durable items.",
  },
  {
    title: "Clothes for Disaster Relief",
    date: "March 18, 2025",
    location: "Relief Centre, Kerala",
    description:
      "Support communities affected by natural disasters by donating clothing items. We need lightweight, easy-to-pack clothing like T-shirts, pants, and footwear.",
  },
];

const EventsDrives = () => {
  return (
    <div className="events-drives-section">
      <div
        className="title-dive"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <h1 className="events-drives-title">Upcoming Events & Drives</h1>
        <img
          src={events}
          alt=""
          height={"200px"}
          width={"200px"}
          style={{ borderRadius: "60px" }}
        />
      </div>

      <p className="events-drives-description">
        Stay updated with our latest events and drives where you can contribute
        to the cause and make a difference in someone’s life.
      </p>
      <div className="events-list">
        {eventsData.map((event, index) => (
          <div className="event-item" key={index}>
            <h2 className="event-title">{event.title}</h2>
            <p className="event-date">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="event-location">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsDrives;
