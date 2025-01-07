import React, { useState } from "react";
import Hero from "./Hero";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who are we and what is our mission?",
      answer:
        "We are a vibrant community of tech enthusiasts united by a common goal – to foster a dynamic coding environment through an exciting array of tech and semi-tech events.",
    },
    {
      question: "How can I join IEEE CS?",
      answer:
        "Membership in IEEE CS is open to everyone. We conduct a yearly membership drive, providing an opportunity for all interested individuals to join our community.",
    },
    {
      question: "Are there any prerequisites for joining the club?",
      answer:
        "Absolutely! All you need is a genuine passion for technology and a determination to learn and grow together.",
    },
    {
      question: "What benefits do members receive?",
      answer:
        "As a member, you'll experience personal and professional growth, free access to events, coding challenges, and industry networking opportunities.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
       // backgroundImage: "url('/assets/paper.jpg')", // Common background
        //backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "Poppins, sans-serif",
       // opacity: "0.6"
      }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Member Statistics Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "rgba(41, 41, 41, 0.8)",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px",
          color: "#fff",
          maxWidth: "1200px",
          margin: "20px auto",
        }}
      >
        {[{ label: "Members", count: "1,500+" },
          { label: "Events", count: "20+" },
          { label: "Societies", count: "3+" },
          { label: "Mentors", count: "10+" },
        ].map((stat, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "24px",
                color: "#FFD700",
                fontWeight: "bold",
              }}
            >
              {stat.count}
            </p>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "rgba(41, 41, 41, 0.9)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#FFD700",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          FAQs
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              padding: "15px",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor: "rgba(41, 41, 41, 0.8)",
              color: "#fff",
            }}
            onClick={() => toggleFAQ(index)}
          >
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#FFD700",
              }}
            >
              {faq.question}
            </h4>
            <p
              style={{
                marginTop: "10px",
                display: openIndex === index ? "block" : "none",
                color: "#bbb",
              }}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
