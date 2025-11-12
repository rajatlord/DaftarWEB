"use client";
import React from "react";
import "./Hero.style.css";

const Hero: React.FC = () => {
  const handleCopy = () => {
    const phoneNumber = "7701-900-819";
    navigator.clipboard.writeText(phoneNumber.toString());
  };
  return (
    <section
      className="hero-container"
      // style={{ marginTop: "80px", position: "relative", width:"100%"}}
    >
      <video
        src="/assets/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
        // style={{
        //   width: "100vw",
        //   height: "120vh",
        //   zIndex: 1,
        //   filter: "brightness(0.5)",
        // }}
      />
      <div
        className="content-wrapper"
        // style={{
        //   zIndex: 3,
        //   position: "absolute",
        //   padding: "20px",
        // }}
      >
        <div className="text-content">
          <h1 className="headline montserrat-font"
          //  style={{fontSize:"6rem"}}
           >
            A Smart Mobility
            to Work
          </h1>
          <p className="sub-headline">
            Subscribe to Daftar Route today and opt for a safer, smarter, <br />and stress-free commute 
          </p>
          <p className="button-wrapper">
        <button className="outline-button glass-card" onClick={handleCopy}>Contact us  at 7701-900-819</button>
          </p>
        </div>
        
        {/* Form code */}
        <div className="form-wrapper ">
          <form className="form-container glass-card">
            <div className="form-group">
              <label className="form-label">Home Address</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., Pitampura, New Delhi"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Work Address</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. DLF Tower 10th Rd"
              />
            </div>
            <div className="form-group">
              <label className="form-label">No of working days</label>
               <select className="form-select" defaultValue="5 days">
                <option value="5 days">5 days</option>
                <option value="6 days">6 days</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">
                Choose your monthly subscription
              </label>
              <select className="form-select" defaultValue="3 Months">
                <option value="1 Month">1 Month</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="12 Months">12 Months</option>
              </select>
            </div>
        <div style={{ display: "flex" , marginTop: "10px", gap: "10px", justifyContent:"center"}}>
              <button className="primary-button">GET Quote</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
