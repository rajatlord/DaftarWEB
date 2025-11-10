import React from "react";
import "./../solutions.css";

const industries = [
  { name: "IT & GCCs", desc: "Multi-shift scheduling, secure rides, and real-time tracking." },
  { name: "Retail & FMCG", desc: "High-volume routing, dynamic shifts, and timely pickups." },
  { name: "Healthcare", desc: "24×7 coverage, staff & patient transport, safety-first." },
  { name: "Manufacturing & Warehousing", desc: "Shift-based shuttle management and optimized fleet." },
  { name: "Education & Institutions", desc: "Safe student transport, route visibility, automated attendance." },
  { name: "Hospitality & Services", desc: "Guest & staff transport, flexible scheduling, fleet management." },
  { name: "Corporate Offices", desc: "Daily commute optimization with EV & bus fleet analytics." },
];

const IndustrySolutions = () => {
  return (
    <section className="section">
      <h2>Industry-Specific Solutions</h2>
      <div className="industry-grid">
        {industries.map((i) => (
          <div key={i.name} className="industry-card">
            <h3>{i.name}</h3>
            <p>{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustrySolutions;
