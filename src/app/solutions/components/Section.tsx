import React from "react";
import "./../solutions.css";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="section benifits-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
