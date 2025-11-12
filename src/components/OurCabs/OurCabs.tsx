"use client";
import React from "react";
import { useEffect, useRef } from "react";
import "./OurCabsNew.style.css";

import WagonRImage from "../../../assets/ourCabs/cars/traffic.jpg";
import SedanImage from "../../../assets/ourCabs/cars/sedan.jpg";
import MUVImage from "../../../assets/ourCabs/cars/muv2.avif";
import SUVImage from "../../../assets/ourCabs/cars/suv2.avif";
import EVImage from "../../../assets/ourCabs/cars/EV2.webp";
import Image from "next/image";
import Service from "../service/service";
import StatsSection from "../StatsSection";
import WhyChooseDaftarRoute from "../WhyChooseDaftarRoute/WhyChooseDaftarRoute";
import HowItWorksSection from "../HowItWorks/HowItWorks";
const cards = [
  {
    image: WagonRImage,
    title: "Traffic?",
    carType: "Try It",
    description: "The four seater WagonR gives you an amazing ride hassle free.",
    buttonText: "Find available cars",
  },
  {
    image: SedanImage,
    title: "Office?",
    carType: "Sedan",
    description: "Choice of everyone. Commute to your work at ease.",
    buttonText: "Learn more",
  },
  {
    image: MUVImage,
    title: "Style?",
    carType: "MUV",
    description: "Commuting to your workplace is easy & comfortable now.",
    buttonText: "Learn more",
  },
  {
    image: SUVImage,
    title: "Luxury?",
    carType: "SUV",
    description: "Faster & safer comes with our professional verified drivers.",
    buttonText: "Learn more",
  },
  {
    image: EVImage,
    title: "Premium",
    carType: "EV's",
    description:
      "Our all electric vehicles gives you a comfortable ride & helps our environment clean.",
    buttonText: "Learn more",
  },
];

const OurCabs: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".car-card") as HTMLElement;
      if (card) {
        const cardWidth = card.getBoundingClientRect().width;
        const style = window.getComputedStyle(scrollRef.current);
        const gap = parseInt(style.columnGap || style.gap || "0", 10);

        scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".car-card") as HTMLElement;
      if (card) {
        const cardWidth = card.getBoundingClientRect().width;
        const style = window.getComputedStyle(scrollRef.current);
        const gap = parseInt(style.columnGap || style.gap || "0", 10);

        scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      console.log(scrollRef.current.scrollWidth, scrollRef.current.clientWidth);
    }
  }, []);

  return (
    <div>
      {/* <HowItWorksSection /> */}
      <div>
        <section

          className="ourcabs-section"
        >
          <h2 className="section-title">OUR CAB&apos;S</h2>
          <div className="ourcabs-wrapper" >
            <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
            <div className="fixed-card">
              <div className="car-image">
                <Image src={cards[0].image} alt={cards[0].carType} />
              </div>
              <div className="car-text">
                <h3>{cards[0].title}</h3>
                <h2>{cards[0].carType}</h2>
                <p>{cards[0].description}</p>
              </div>
            </div>
            <div className="horizontal-scroll"
              ref={scrollRef}
            >

              {[
                ...cards.slice(1)].map((card, index) => (
                  <div key={index} className="car-card">
                    <div className="car-image">
                      <Image src={card.image} alt={card.carType} />
                    </div>
                    <div className="car-text">
                      <h3>{card.title}</h3>
                      <h2>{card.carType}</h2>
                      <p style={{ overflow: "hidden" }}>{card.description}</p>
                    </div>
                  </div>
                ))}
            </div>
            <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
          </div>
        </section>
      </div>
      <div>
        <Service />
      </div>
      <div>
        <WhyChooseDaftarRoute />
      </div>
      <div>
        <StatsSection />
      </div>
    </div>
  );
};

export default OurCabs;
