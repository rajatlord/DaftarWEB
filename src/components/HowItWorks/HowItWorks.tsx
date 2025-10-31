import React from "react";
import Image from "next/image";
import "./HowItWorks.style.css";
import PhoneScreenImage from "../../../assets/TrackScreenImage.jpg";
import Step1Image from "../../../assets/steps/1.jpg";
import Step2Image from "../../../assets/steps/2.jpg";
import Step3Image from "../../../assets/steps/3.png";
const steps = [
  {
    image: Step1Image,
    text: "Click MAP YOUR DAFTAR ROUTE Button.",
  },
  {
    image: Step2Image,
    text: "Fill & Submit the form.",
  },
  {
    image: Step3Image,
    text: "Wait for the dispatcher call & you are done.",
  },
];
const HowItWorksSection: React.FC = () => {
  return (
    <section className="how-it-works-section">
      <div className="green-wave-bg"></div>
      <div className="how-it-works-content-wrapper">
        <div className="how-it-works-text-content">
          <div>
            <h2 className="second-heading">Let&apos;s get started in 3 simple Steps</h2>
            </div>
          <h3 style={{ textAlign: "left", fontWeight: "normal", fontSize: "2rem", marginLeft: "4px", marginBottom: "10px" }}>How It&apos;s Works:</h3>
          <ol className="steps-list" style={{ width: "100%", height: "100%" }}>
            {steps.map((step, index) => (
              <li key={index} className="step-card">
                <div className="step-image">
                  <Image src={step.image} alt={`Step ${index + 1}`}
                    style={{ width: "100%", height: "100%" }} />
                </div>
                <p className="step-text">{step.text}</p>
              </li>
            ))}
          </ol>
          <button className="map-button">
            MAP YOUR DAFTAR ROUTE
          </button>
        </div>
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
