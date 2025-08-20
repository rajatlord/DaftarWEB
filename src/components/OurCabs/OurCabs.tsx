"use client";
import React, { useState, useEffect } from "react";
import "./OurCabs.style.css";

import WagonRImage from "../../../assets/Sedan.png";
import SedanImage from "../../../assets/Sedan.png";
import MUVImage from "../../../assets/Sedan.png";
import SUVImage from "../../../assets/Sedan.png";
import EVImage from "../../../assets/Sedan.png";
import Image from "next/image";

const slides = [
  {
    image: WagonRImage,
    labelText: "TRAFFIC?",
    carType: "TRY IT",
    description:
      "The four seater WagonR gives you an amazing ride hassle free.",
    className: "traffic-car", // For specific text color if needed
  },
  {
    image: SedanImage,
    labelText: "OFFICE?",
    carType: "SEDAN",
    description: "Choice of everyone. Commute to your work at ease.",
    className: "office-car",
  },
  {
    image: MUVImage,
    labelText: "STYLE?",
    carType: "MUV",
    description: "Commuting to your workplace is easy & comfortable now.",
    className: "style-car",
  },
  {
    image: SUVImage,
    labelText: "LUXURY?",
    carType: "SUV",
    description: "Faster & safer comes with our professional verified drivers.",
    className: "luxury-car",
  },
  {
    image: EVImage,
    labelText: "PREMIUM",
    carType: "EV'S",
    description:
      "Our all electric vehicles gives you a comfortable ride & helps our environment clean.",
    className: "premium-ev", // For the blue text color
  },
];

const OurCabs: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => clearInterval(interval); // Clean up on unmount or hover change
  }, [currentSlide, isHovered]);

  return (
    <section
      className="carousel-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* "OUR CAB'S" Ribbon */}
      <div className="ribbon">OUR CAB&apos;S</div>

      {/* Left Navigation Arrow */}
      <div className="nav-arrow left" onClick={prevSlide}>
        &lt;
      </div>

      {/* Carousel Inner Container */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Slide animation
          >
            <div className="car-image-container">
              <Image src={slide.image} alt={slide.carType} />
            </div>
            <div className={`text-block ${slide.className}`}>
              {" "}
              {/* Apply dynamic class for text color */}
              <span className="label-text">{slide.labelText}</span>
              <span className="car-type-text">{slide.carType}</span>
              <p className="description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Navigation Arrow */}
      <div className="nav-arrow right" onClick={nextSlide}>
        &gt;
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default OurCabs;
