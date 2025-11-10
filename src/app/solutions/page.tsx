import React from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Card from "./components/Card";
import CTA from "./components/CTA";
import IndustrySolutions from "./components/IndustrySolutions";
import Image from "next/image";
import benefits from "../../../public/assets/statsSection/corporate.webp";
import {
  FaRoute,
  FaShieldAlt,
  FaClock,
  FaRobot,
  FaChartLine,
  FaUserShield,
  FaBus,
  FaDatabase,
} from "react-icons/fa";
import "./solutions.css?v=5";

export const metadata = {
  title: "One Stop Corporate Commute Solutions for Companies and Employees",
  description:
    "Check out our personalised corporate transportation services brought to you by Daftar Route. Contact us to schedule a call today.",
};

const SolutionsPage = () => {
  return (
    <main className="solutions-main" >
      <Hero
        title="The Only Home to Office Commute Platform You Need"
        subtitle="Smart, Safe, and Sustainable Employee Commutes, powered by intelligent scheduling, real-time tracking, 24×7 customer support, and a flexible fleet."
        ctaText="See Daftar Route in Action"
      />
      <div className="solution-body-container">
      <Section title="Common Commuter Challenges" >
        <div className="card-grid">
          <Card
            title="Rising Costs"
            description="Fuel and operational costs from inefficient routing and static scheduling."
            Icon={FaChartLine}
          />
          <Card
            title="Unreliable Pickups"
            description="Lack of visibility, delays, and safety risks."
            Icon={FaShieldAlt}
          />
          <Card
            title="Complex Scheduling"
            description="Difficulty managing compliance, multiple shifts, and accurate billing."
            Icon={FaClock}
          />
        </div>
      </Section>

      {/* Solutions Provided */}
      <Section title="Daftar Route End-to-End Solutions">
        
        <div className="solution-card-grid">
          <div>
          <Card
            title="AI-powered Route Optimization"
            description="Combines real-time and historical data to find the most efficient routes automatically."
            Icon={FaRobot}
          />
          </div>
          <div>
          <Card
            title="Real-time GPS Tracking & Safety"
            description="SOS alerts, women’s safe drop, verified drivers, and live geo-fencing."
            Icon={FaRoute}
          />
          </div>
          <div>
          <Card
            title="Flexible Fleet Automation"
            description="Dynamic shift handling and automated scheduling for seamless operations."
            Icon={FaBus}
          />
          </div>
          <div>
          <Card
            title="Dedicated Support Teams"
            description="24×7 live support for enterprises and employees."
            Icon={FaUserShield}
          />
          </div>
          <div>
          <Card
            title="SaaS eTMS Integration"
            description="Seamlessly integrates with enterprise transport systems and compliance modules."
            Icon={FaDatabase}
          />
          </div>
        </div>
      </Section>
      <Section title="Benefits & Outcomes">
        <div  className="benefits-container">
        <p className="benefits-list">
          <br /> Save up to 70% on commute costs
          <br /> Boost employee satisfaction and on-time arrival rates
          <br /> Reduce your carbon footprint with sustainable EV deployments
          <br /> Gain actionable insights via dashboards and compliance reports
        </p>
            <div>
                <Image src={benefits} alt="Benefits Image" style={{borderRadius:"10px"}}  className="benefits-img"/>
            </div>
        </div>
      </Section>
      <IndustrySolutions />
      <Section title="Analytics & Reporting">
        <p className="analytics-text">
          Access real-time dashboards, compliance reports, and data-driven insights.  
          Monitor routes, fuel usage, employee satisfaction, and cost efficiency — all from one place.
        </p>
      </Section>
      <CTA
        title="Ready to transform your employee commute?"
        subtitle="Talk to our experts and get your demo today."
        buttonText="Talk to Us Now"
      />
      </div>
    </main>
  );
};

export default SolutionsPage;
