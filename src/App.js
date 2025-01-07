import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Members from "./components/Members";
import StayUpdated from "./components/StayUpdated";
import Footer from "./components/Footer";

const App = () => (
  <div
    style={{
      position: "relative",
      minHeight: "100vh", // Ensure content takes full viewport height
      overflow: "hidden", // Prevent scroll on the body
    }}
  >
    {/* Global Video Background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -2, // Behind everything
      }}
    >
      <source src="/assets/mars.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Paper Image Overlay */}
    <div
      style={{
        backgroundImage: "url('/assets/paper.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.6, // Adjust opacity for blending
        zIndex: -1, // Above video but behind content
      }}
    ></div>

    {/* Page Content */}
    <Router>
      <Navbar />
      <div
        style={{
          position: "relative", // Ensure content appears above the background
          zIndex: 1,
          padding: "20px 0", // Add global padding for content spacing
          minHeight: "100vh", // Make sure content fills the viewport height
          overflow: "auto", // Allow content to scroll
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/stay-updated" element={<StayUpdated />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </div>
);

export default App;
