import React from "react";
import "./WhyChooseDaftarRoute.css";
import Image from "next/image";
import photo from "../../../public/assets/about_us/team2.jpg";

// Import FontAwesome icons
import { FaTaxi, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaCogs } from "react-icons/fa";

type Feature = { icon: React.ReactNode; text: string };


const features: Feature[] = [
  { icon: <FaTaxi />, text: "Women-friendly cabs" },
  { icon: <FaMapMarkerAlt />, text: "Real-time tracking" },
  { icon: <FaCalendarAlt />, text: "Monthly subscriptions" },
  { icon: <FaUsers />, text: "Dedicated support teams" },
  { icon: <FaCogs />, text: "SaaS eTMS Integration" },
];

export default function WhyChooseDaftarRoute() {
  return (
    <section className="dr-why">
      <h2 className="dr-title">Why Choose DaftarRoute</h2>
      <div className="dr-shell">
        {/* LEFT: Image */}
        <figure className="dr-media">
          <Image
            src={photo}
            alt="DaftarRoute Transportation"
            // width={500}
            // height={400}
            className="dr-img"
            // style={{ borderRadius: "20px", objectFit: "cover" }}
          />
        </figure>

        {/* RIGHT: Content */}
        <div className="dr-content">
          <p className="dr-desc">
            DaftarRoute is a smart corporate mobility partner delivering safe,
            reliable, and tech-enabled employee transportation services. With
            real-time tracking, optimized routes, and professional drivers, we
            help companies ensure timely commutes while reducing costs and
            carbon footprint.
          </p>

          <ul className="dr-features">
            {features.map((f, i) => (
              <li className="dr-card" key={i}>
                <span className="dr-icon">{f.icon}</span>
                <span className="dr-text">{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="dr-features-tablet">
            {features.map((f, i) => (
              <li className="dr-card" key={i}>
                <span className="dr-icon">{f.icon}</span>
                <span className="dr-text">{f.text}</span>
              </li>
            ))}
          </ul>
    </section>
  );
}
