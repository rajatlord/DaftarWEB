"use client";
import React from "react";
import "./../solutions.css";
import { useState, useEffect } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText }) => {
  const [animate, setAnimate] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className={`hero-content ${animate ? "fade-in-up" : ""}`}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <button className="primary-btn">{ctaText}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
