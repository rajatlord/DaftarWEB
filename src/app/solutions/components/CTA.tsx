import React from "react";
import "./../solutions.css";

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const CTA: React.FC<CTAProps> = ({ title, subtitle, buttonText }) => {
  return (
    <section className="cta-banner">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button className="primary-btn">{buttonText}</button>
    </section>
  );
};

export default CTA;
