import React from "react";
import Image from "next/image";
import "./HowItWorks.style.css"; // Import the CSS file
import PhoneScreenImage from "../../../assets/TrackScreenImage.jpg"; // Assuming your image is here

// Make sure to place your image file, e.g., phone-screen.jpg, in a folder like `src/assets/`
// Or update the import path to where your image is located.

const HowItWorksSection: React.FC = () => {
  return (
    <section className="how-it-works-section">
      {/* Green Wave Background */}
      <div className="green-wave-bg"></div>

      <div className="how-it-works-content-wrapper">
        {/* Left Side: Text Content */}
        <div className="how-it-works-text-content">
          <h2>Let&apos;s get started in 3 simple Steps</h2>
          <p className="description">
            Get your subscription today and start commuting to work with our
            cutting-edge, cloud-based smart sharing mobility solution. Welcome
            to the future of commuting!
          </p>
          <h3>How It Works:</h3>
          <ol>
            <li>Click MAP YOUR DAFTAR ROUTE Button.</li>
            <li>Fill & Submit the form.</li>
            <li>Wait for the dispatcher call & you are done.</li>
          </ol>
          <a href="#" className="map-button">
            MAP YOUR DAFTAR ROUTE
          </a>
        </div>

        {/* Right Side: Phone Mockup */}
        <div className="phone-mockup-container">
          <div className="phone-screen">
            <Image
              src={PhoneScreenImage}
              alt="Daftar Route App Screen"
              className="phone-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
