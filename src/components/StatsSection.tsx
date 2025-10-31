import React from "react";
import "./StatsSection.css";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: "600+",
    label: "Employee Rides / Month",
    image: "/assets/statsSection/corporate.webp"
  },
  {
    value: "99%",
    label: "On-Time Arrival Rate",
    image: "/assets/statsSection/time2.jpg"
  },
  {
    value: "4.8/5",
    label: "Rider Satisfaction",
    image: "/assets/statsSection/ets.jpg"
  },
  {
    value: "30%",
    label: "Reduced Commute Time",
    image: "/assets/statsSection/time.jpg"
  }
];

export default function StatsSection() {

  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".stat-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>

      <h2 className="stats-title">Making Employee Commutes Better</h2>
      <p className="stats-subtitle">
        Helping organizations ensure safe, reliable and sustainable travel for their workforce.
      </p>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div
            key={index}
            className="stat-card"
          >
            <div
              className="stat-bg"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="stat-content">
              <h3 className="stat-value">{item.value}</h3>
              <p className="stat-label">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
