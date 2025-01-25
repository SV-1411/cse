import React from "react";

const Hero = () => (
  <>
    {/* Hero Section */}
    <div
      className="hero"
      style={{
        padding: "200px 20px",
        textAlign: "center",
        position: "relative",
        backgroundAttachment: "fixed",
        color: "#fff",
        fontFamily: "Poppins",
        marginTop: "-50px",
      }}
    >
      {/* Background Image */}
      <div
        style={{
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

      {/* Logo */}
      <img
        src="/assets/ieee1.png"
        alt="IEEE CS Logo"
        style={{
          width: "80%",
          maxWidth: "500px",
          height: "auto",
          margin: "0 auto 40px",
          display: "block",
          zIndex: 1,
        }}
      />

      {/* Heading */}
      <h1
        style={{
          fontSize: "2.5rem",
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
          fontSize: "1rem",
          color: "#bbbbbb",
          margin: "20px auto 40px",
          maxWidth: "900px",
          lineHeight: "1.5",
        }}
      >
        We strive to be the leading provider of technical information, community
        services, and personalized support to the world’s computer science and
        technology communities. We are IEEE Computer Society.
      </p>
    </div>

    <style jsx>{`
      .hero {
        padding: 200px 50px;
      }

      @media (max-width: 768px) {
        .hero {
          padding: 150px 20px;
        }

        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 0.9rem;
          max-width: 500px;
        }
      }

      @media (max-width: 480px) {
        .hero {
          padding: 100px 10px;
        }

        h1 {
          font-size: 1.8rem;
        }

        p {
          font-size: 0.8rem;
          max-width: 400px;
        }
      }
    `}</style>
  </>
);

export default Hero;