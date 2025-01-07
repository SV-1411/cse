import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Logo and Name Section */}
        <div style={{ flex: "1", minWidth: "200px", textAlign: "left" }}>
          <img
            src="/assets/ieee1.png"
            alt="IEEE Logo"
            style={{ maxWidth: "200px", marginBottom: "10px" }}
          />
         {/* <h3 style={{ margin: "10px 0", fontWeight: "bold" }}>IEEE COMPUTER SOCIETY</h3>*/}
          <p style={{ margin: "0" }}>Manipal University Jaipur</p>
        </div>

        {/* Social Media Section */}
        <div style={{ flex: "1", minWidth: "200px", textAlign: "left" }}>
          <h4 style={{ fontWeight: "bold", marginBottom: "10px" }}>Socials</h4>
          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
            <li>@ieeeghrce ↗</li>
            <li>@ieee_cs ↗</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div style={{ flex: "1", minWidth: "200px", textAlign: "left" }}>
          <h4 style={{ fontWeight: "bold", marginBottom: "10px" }}>Contact Us</h4>
          <p>+91 96236 88451 - Shivansh Verma</p>
          <p>+91 96236 88451 - Shivansh Verma</p>
        </div>

        {/* Links Section */}
        <div style={{ flex: "1", minWidth: "200px", textAlign: "left" }}>
          <h4 style={{ fontWeight: "bold", marginBottom: "10px" }}>Links</h4>
          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
            <li>GHRCE Official Website</li>
            <li>IEEE Official Website</li>
            <li>IEEE Computer Society</li>
            <li>IEEE Global Membership</li>
          </ul>
        </div>

        {/* Address Section */}
        <div style={{ flex: "1", minWidth: "200px", textAlign: "left" }}>
          <h4 style={{ fontWeight: "bold", marginBottom: "10px" }}>Address</h4>
          <p>
            GH Raisoni College of Engineering,
            <br />
            Hingna, Digdhon Hills
            <br />
            Nagpur 440016
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
