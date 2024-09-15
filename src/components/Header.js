import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <h1 onClick={handleTitleClick}>AshaWardrobe</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <Link to="/request">Request</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/joinus">Join Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
