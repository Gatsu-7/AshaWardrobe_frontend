// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// import "./Header.css";

// const Header = () => {
//   const navigate = useNavigate();

//   const handleTitleClick = () => {
//     navigate("/");
//   };

//   return (
//     <header className="header">
//       <h1 onClick={handleTitleClick}>AshaWardrobe</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/donate">Donate</Link>
//           </li>
//           <li>
//             <Link to="/request">Request</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/joinus">Join Us</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1 className="header-title" onClick={handleTitleClick}>
        AshaWardrobe
      </h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
              Donate
            </Link>
          </li>
          <li>
            <Link to="/request" onClick={() => setIsMenuOpen(false)}>
              Request
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/joinus" onClick={() => setIsMenuOpen(false)}>
              Join Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
