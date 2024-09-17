import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import About from "./pages/About";
import "./App.css";
import Joinus from "./pages/Joinus";
import VolunteerProgram from "./pages/Volunteer";
import DonationGuidelines from "./pages/Donation";
import RequestAssistance from "./pages/Request";
import BlogPage from "./pages/Blog_page1";
import BlogPageSaveLives from "./pages/BlogPageSaveLives";
import BlogPageSustainableFashion from "./pages/BlogPageSustainableFashion";
import BlogRoute from "./pages/BlogRoute";
import DonorStories from "./pages/Donorstories";
const App = () => (
  <Router>
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonationGuidelines />} />
          <Route path="/request" element={<RequestAssistance />} />

          <Route path="/about" element={<About />} />
          <Route path="/joinus" element={<VolunteerProgram />} />
          <Route
            path="/blog/importance-clothing-donations"
            element={<BlogPage />}
          />
          <Route
            path="/blog/old-clothes-save-lives"
            element={<BlogPageSaveLives />}
          />
          <Route
            path="/blog/sustainable-fashion-donation"
            element={<BlogPageSustainableFashion />}
          />
          <Route path="/blog/donor-stories" element={<DonorStories />} />
          <Route path="/blog" element={<BlogRoute />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
