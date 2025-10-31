import React from "react";
import Hero from "./components/Hero";
import JoinSection from "./components/JoinSection";
import "./careers.css";

export const metadata = {
  title: "Join Our Dynamic Team at Daftar Route!",
  description:
    "Daftar Route is hiring! Explore career opportunities, grow your skills, and be part of a passionate team redefining employee transport.",
};

const CareersPage = () => {
  return (
    <main className="careers-page">
      <Hero />
      <div style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "150px",
            marginRight: "150px"
          }}>
      <JoinSection />
      </div>
    </main>
  );
};

export default CareersPage;
