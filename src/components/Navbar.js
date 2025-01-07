import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          padding: "10px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              color: "#ffcc00",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            IEEE CS
          </Link>

          {/* Hamburger Icon */}
          <div
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
            onClick={toggleMenu}
          >
            &#9776; {/* Hamburger Icon */}
          </div>
        </div>
      </nav>

      {/* Side Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: menuOpen ? 0 : "-250px", // Slide-in animation
          width: "250px",
          height: "100%",
          backgroundColor: "black",
          zIndex: 1001,
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          transition: "right 0.3s ease-in-out",
          boxShadow: menuOpen ? "0 0 15px rgba(0,0,0,0.7)" : "none",
        }}
      >
        <button
          onClick={toggleMenu}
          style={{
            color: "white",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "1.5rem",
            alignSelf: "flex-end",
            cursor: "pointer",
          }}
        >
          &times; {/* Close Button */}
        </button>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "20px 0",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {/* Nav Items */}
          {[
            { name: "Home", path: "/home" },
            { name: "About Us", path: "/about" },
            { name: "Events", path: "/events" },
            { name: "Members", path: "/members" },
            { name: "Blog", path: "https://www.computer.org/publications/tech-news", external: true },
          ].map((item, index) => (
            <li key={index}>
              {item.external ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: isActive(item.path) ? "#ffcc00" : "#ffffff",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    display: "block",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    transition: "transform 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.path}
                  style={{
                    color: isActive(item.path) ? "#ffcc00" : "#ffffff",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    display: "block",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    transition: "transform 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          }}
        />
      )}
    </>
  );
};

export default Navbar;
