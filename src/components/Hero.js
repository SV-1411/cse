import React from "react";

const Hero = () => (
  <>
    {/* Hero Section */}
    <div
      className="hero"
      style={{
        padding: "250px 200px",
        textAlign: "center",
        position: "relative",
        backgroundAttachment: "fixed",
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: "3rem",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          //backgroundImage: "url('/assets/paper.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.7,
          zIndex: -1,
        }}
      ></div>

      {/* Background Video 
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/assets/mars.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
*/}
      {/* Logo */}
      <img
        src="/assets/ieee1.png"
        alt="IEEE CS Logo"
        style={{
          width: "500px",
          height: "auto",
          margin: "0 auto 40px",
          display: "block",
          zIndex: 1,
        }}
      />

      {/* Heading */}
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#ffffff",
          margin: "40px 0 20px",
        }}
      >
        We Live in a{" "}
        <span
          className="highlight"
          style={{
            color: "#ffcc00",
          }}
        >
          Computer Society.
        </span>
      </h1>

      {/* Subheading */}
      <p
        style={{
          fontSize: "1.2rem",
          color: "#bbbbbb",
          margin: "20px 0 40px",
        }}
      >
        We strive to be the leading provider of technical information, community
        services, and personalized support to the world’s computer science and
        technology communities. We are IEEE Computer Society.
      </p>
    </div>
  </>
);

export default Hero;
