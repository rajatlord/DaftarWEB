"use client";

import React from "react";
import "./Hero.style.css"; // Import the CSS file
// image imorts
import Image from "next/image";
import Order_ride_bro from "../../assets/HeroSectionImg/Order_ride_bro.png";
// import video from "../../assets/HeroSectionImg/video.mp4"; // Assuming you have a video file

const Hero: React.FC = () => {
  const handleCopy = () => {
    const phoneNumber = "7701-900-819";
    navigator.clipboard.writeText(phoneNumber.toString());
    // alert(`Copied: ${phoneNumber}`);
  };
  return (
    <section
      className="hero-container"
      style={{ marginTop: "80px", position: "relative", marginLeft: "-23px", width:"100%"}}
    >
      <video
        src="/assets/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100vw",
          height: "113vh",
          borderRadius: "12px",
          zIndex: 1,
          filter: "brightness(0.5)",
        }}
      />
      {/* <div style={{ width: "100vw", height: "113vh", borderRadius: "12px", zIndex: 2,backgroundColor: "black"}}>
          
        </div> */}
      {/* <div className="curved-background"></div>{" "} */}
      {/* This creates the dark curved background */}
      <div
        className="content-wrapper"
        style={{
          zIndex: 3,
          position: "absolute",
          padding: "20px",
          // backgroundColor: "rgba(255, 255, 255, 0.2)"
        }}
      >
        <div className="text-content">
          <h1 className="headline montserrat-font">
            A Smart Mobility
            to Work
          </h1>
          <p className="sub-headline">
            Get your Monthly Subscription today and commute to
            <br /> work hassle free
          </p>
          <p className="button-wrapper">
            {/* <button className="primary-button">GET Quote</button> */}
        <button className="outline-button glass-card" onClick={handleCopy}>Contact us  at 7701-900-819</button>
          </p>
        </div>
        <div>
          {/* <Image
  src={Order_ride_bro}
  alt="Order Ride"
  style={{ height: "500px", width: "500px" }}
/> */}
        </div>
        {/* <div className="form-wrapper">

         </div style={{}}> */}
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
              {/* <input
                type="text"
                className="form-input"
                placeholder="Number of working days, i.e 5 days or 6 days in a week"
              /> */}
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
            {/* <button type="submit" className="primary-button" style={{ width: "130px" }}>
              Get quote
            </button> */}
        <div style={{ display: "flex" , marginTop: "10px", gap: "10px", justifyContent:"center"}}>
              <button className="primary-button">GET Quote</button>
             
            </div>
          </form>
        </div>
      </div>
      {/* <div className="chat-widget">Any query, chat with us!</div> */}
    </section>
  );
};

export default Hero;
