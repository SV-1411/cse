import React, { useState } from "react";

// Array to store team member details
const teamMembers = [
  {
    name: "Shivansh",
    role: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam debitis eligendi excepturi facere laudantium nulla sint sit ut voluptatibus.",
    image: "/assets/Shivansh Verma..jpg", // Replace with your image path
  },
  {
    name: "uhmmmm",
    role: "Web Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam debitis eligendi excepturi facere laudantium nulla sint sit ut voluptatibus.",
    image: "images/img-2.jpg", // Replace with your image path
  },
];

// Reusable TeamMemberCard Component
const TeamMemberCard = ({ name, role, description, image }) => {
  const [hovered, setHovered] = useState(false);

  // Inline styles for the card
  const cardStyle = {
    position: "relative",
    width: "300px",
    margin: "15px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    transform: hovered ? "scale(1.05)" : "scale(1)",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    transition: "filter 0.3s ease",
    filter: hovered ? "brightness(70%)" : "brightness(100%)",
  };

  const infoStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    padding: "10px",
    zIndex: "2",
    textAlign: "center",
  };

  const descriptionStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: "20px",
    borderRadius: "8px",
    zIndex: "3",
    opacity: hovered ? "1" : "0",
    transition: "opacity 0.3s ease",
    textAlign: "center",
    fontSize: "14px",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={name} style={imageStyle} />
      <div style={infoStyle}>
        <h3 style={{ margin: "0", fontSize: "18px" }}>{name}</h3>
        <p style={{ margin: "5px 0 0", fontSize: "14px" }}>{role}</p>
      </div>
      <div style={descriptionStyle}>{description}</div>
    </div>
  );
};

// Main Members Component
const Members = () => {
  return (
    <div
      style={{
        position: "relative", // Ensures proper stacking of elements
        zIndex: "10", // Brings the Members section above any background
      }}
    >
      {/* Heading Section */}
      <h1
        style={{
          marginTop: "100px",
          marginBottom: "50px",
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#fff", // Ensures visibility on dark backgrounds
          zIndex: "15", // Keeps heading above other elements
        }}
      >
        Members
      </h1>

      {/* Members Card Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
          zIndex: "10", // Ensures the cards appear correctly
        }}
      >
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Members;
