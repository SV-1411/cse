import React, { Component } from "react";
import Layout from "./Layout"; // Import the Layout component

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { src: "/assets/dark1.png", alt: "IEEE CS Image 1" },
        { src: "/assets/dark2.jpg", alt: "IEEE CS Image 2" },
        { src: "/assets/paper.jpg", alt: "IEEE CS Image 3" },
      ],
      currentIndex: 0,
    };
  }

  nextImage = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.images.length,
    }));
  };

  prevImage = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + prevState.images.length) %
        prevState.images.length,
    }));
  };

  render() {
    const { images, currentIndex } = this.state;

    return (
      <Layout>
        <div style={{ marginTop: "150px" }}>
        {/* About Us Section */}
        <section
         
          id="about-us"
          style={{
            maxWidth: "1200px", // Increase maxWidth
            margin: "40px auto", // Add more spacing around
            padding: "60px", // Increase padding
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,1)",
            opacity: "0.7",
            zIndex: "-2",
            //backgroundImage: "url('/assets/paper.jpg')", // Correct backgroundImage
            backgroundSize: "cover", // Make sure the image covers the whole area
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat", // Avoid repeating
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Add shadow for emphasis
          }}
        >
          <div
            style={{
             //  backgroundImage: "url('/assets/paper.jpg')", // Path to paper.jpg
              //backgroundColor: "rgba(0,0,0,1)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.7, // Adjust opacity for filter effect
              zIndex: -3,
            }}
          ></div>

          <div className="container">
            <div className="row">
              {/* About Us Text */}
              <div className="col-md-6">
                <h2 style={{ fontWeight: "bold", color: "yellow" }}>
                  About Us
                </h2>
                <p
                  style={{ color: "#ccc", fontSize: "18px", lineHeight: "1.8" }}
                >
                  IEEE Computer Society (IEEE CS) is a community of engineers
                  and computer scientists dedicated to advancing technology for
                  humanity. Our mission is to foster innovation and provide
                  resources to our members, enabling them to enhance their
                  skills and knowledge in the ever-evolving field of computing.
                </p>
                <p
                  style={{ color: "#ccc", fontSize: "18px", lineHeight: "1.8" }}
                >
                  Through various initiatives, we organize workshops, webinars,
                  and events that promote learning and collaboration among
                  members. Our goal is to build a strong network of
                  professionals who are passionate about technology and its
                  impact on society.
                </p>
              </div>

              {/* Dynamic Carousel */}
              <div className="col-md-6">
                <div
                  id="aboutUsCarousel"
                  style={{
                    position: "relative",
                    borderRadius: "15px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    style={{
                      width: "100%",
                      height: "340px",
                      borderRadius: "10px",
                      display: "block",
                    }}
                  />

                  {/* Controls */}
                  <button
                    onClick={this.prevImage}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "50%",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    ‹
                  </button>
                  <button
                    onClick={this.nextImage}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "50%",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        </div>
      </Layout>
    );
  }
}

export default AboutUs;
