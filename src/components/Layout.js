import React from "react";

const Layout = ({ children }) => (
  <>
    {/* Video Background */}
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

    {/* Filter Overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust filter opacity
        zIndex: -1,
      }}
    ></div>

    {/* Content */}
    <div
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
      {children}
    </div>
  </>
);

export default Layout;
