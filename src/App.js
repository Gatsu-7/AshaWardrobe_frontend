import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import About from "./pages/About";
import "./App.css";
import Joinus from "./pages/Joinus";
const App = () => (
  <Router>
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/joinus" element={<Joinus />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
