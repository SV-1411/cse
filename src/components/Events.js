import React, { useEffect, useState } from "react";

const Events = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const countdownDate = new Date("2024-12-31T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("ELEVATE has started!");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header
        style={{
          background: "url('/path/to/elevate-header-bg.jpg') no-repeat center center/cover",
          color: "#ffffff",
          padding: "100px 0",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>ELEVATE</h1>
        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
          Join us for an exciting hackathon experience!
        </p>
      </header>

      {/* Countdown Section */}
      <section
        id="countdown-section"
        style={{
          padding: "60px 0",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Countdown to ELEVATE</h2>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "20px",
              color: "#ffcc00",
            }}
          >
            {timeLeft}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="info"
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>About ELEVATE</h2>
          <p style={{ fontSize: "1rem", margin: "10px 0" }}>
            ELEVATE is a platform for innovators and creators to come together
            and push the boundaries of technology. Join us for a day of
            brainstorming, coding, and networking!
          </p>
        </div>
      </section>

      {/* How to Participate */}
      <section
        id="how-to-participate"
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "#e9ecef",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>How to Participate</h2>
          <p style={{ fontSize: "1rem", margin: "10px 0" }}>
            To participate in ELEVATE, register online and form a team of up to
            4 members.
          </p>
        </div>
      </section>

      {/* Join Us */}
      <section
        id="join-us"
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "#e9ecef",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Join Us</h2>
          <p style={{ fontSize: "1rem", margin: "10px 0" }}>
            Be part of ELEVATE and showcase your skills!
          </p>
        </div>
      </section>

      {/* Sponsors Section */}
      <section
        id="sponsors"
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "#e9ecef",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Our Sponsors</h2>
          <p style={{ fontSize: "1rem", margin: "10px 0" }}>
            Thank you to our amazing sponsors for supporting ELEVATE!
          </p>
        </div>
      </section>

      {/* Guest Speakers Section */}
      <section
        id="speakers"
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "#e9ecef",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Guest Speakers</h2>
          <p style={{ fontSize: "1rem", margin: "10px 0" }}>
            Join us for talks from industry leaders and innovators!
          </p>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default Events;
