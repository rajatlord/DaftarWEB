"use client";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
// import main_4 from "../../../public/assets/about_us/main_4.jpg";
// import main_5 from "../../../public/assets/about_us/main-5.jpg";
import main_3 from "../../../public/assets/about_us/main-5.jpg";
// import main_6 from "../../../public/assets/about_us/main_6.jpg";
import main_7 from "../../../public/assets/about_us/main_7.jpg";
import phone from "../../../public/assets/footer/phone.png";
// gif import
import gif from "../../../public/assets/about_us/traffic-jam-rush-hour.gif";

// Icons / Images for zigzag sections
import The_company from "../../../public/assets/about_us/The_company.jpeg";
import who_we_are from "../../../public/assets/about_us/who_we_are.jpeg";
import why_us from "../../../public/assets/about_us/why_us.jpg";
import founder_1 from "../../../public//assets/about_us/founder1.jpeg";
import team from "../../../public//assets/about_us/team.jpg";
import values from "../../../public//assets/about_us/values.jpg";
// CSS module
import styles from "./about.module.css";
import Timeline from "@/components/Timeline";

export default function About() {
  return (
    <div>
      {/* <h1 style={{color:"#4CAF50",zIndex:"10",position:"absolute",  fontFamily:"Montserrat,  sans-serif" , fontSize:"100px",top:"514px"}}>About Us.</h1> */}
      {/* <Image src={main_7} alt="main" className={styles.image} style={{marginTop:"100px"}} /> */}
      {/* Animated Intro Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        style={{
          color: "#2B9119",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "2.013rem",
          margin: "148px 0 250px 0",
          lineHeight: "2.7rem",
          letterSpacing: "0.01em",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {/* Reimagining Corporate Commuting With Intelligent, Seamless Solutions That Deliver Efficiency, and Productivity! */}
        {/* Reimagining Corporate Commuting With Intelligent, Seamless Solutions That Deliver Efficiency, Comfort, and Productivity! */}
        <section className={styles.hero} style={{ paddingTop: "0" }}>
          <h1 className={styles.bold}>Reimagining</h1>

          <div className={styles.line}>
            <span className={styles.thin}>Corporate</span>
            <div className={styles.pill}>
              {/* <Image src={main_3} alt="Tech Image"/> */}
              <Image src={gif} alt="Tech Image" />
            </div>
            <span className={styles.thin}>Commuting</span>
          </div>

          {/* <h2 className={styles.bold}>With Intelligent,</h2> */}
          {/* <h2 className={styles.bold}>With Seamless Solutions,</h2> */}
          <h2 className={styles.bold}>Solutions!</h2>
          {/* <h2 className={styles.thin}></h2> */}
          {/* <h2 className={styles.thin}>Seamless Solutions</h2> */}
          {/* <h2 className={styles.bold}>That Deliver Efficiency,</h2>
  <h2 className={styles.thin}>and Productivity</h2> */}

          {/* <p className={styles.caption}>And that gives me a kick every morning!</p> */}
          {/* <p className={styles.caption}>And that gives me a kick every morning!</p> */}
          <p className={styles.caption}>
            That Deliver Efficiency, and Productivity
          </p>
        </section>
      </motion.h2>

      {/* <Header /> */}

      {/* Hero Section (your original content) */}
      {/* <div className={styles.container}> */}
      {/* <Image src={main_4} alt="main" className={styles.image} /> */}
      {/* <Image src={main_5} alt="main" className={styles.image} /> */}
      {/* <div className={styles.content}>
          <h1 className={styles.heading}>About Daftar</h1>
          <p className={styles.paragraph}>
            <strong>Daftar</strong> isn’t just a product — it's a mission. Born
            from the desire to simplify and streamline workflows, Daftar
            empowers businesses and individuals to stay organized, efficient,
            and ahead of the game.
          </p>
          <p className={styles.paragraph}>
            Whether you're a solo founder or a scaling team, Daftar is built to
            adapt, grow, and deliver results. With a modern tech stack under the
            hood and a clean UI on the surface, it's productivity—reimagined.
          </p>
          <p className={styles.paragraph}>
            Crafted with 💙 by a bunch of builders who believe software should
            feel like magic — smooth, reliable, and a bit fun.
          </p>
        </div> */}
      {/* </div> */}
      {/* <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image src={main_3} alt="main" className={styles.icon} />
        </div>
        <div
          className={`${styles.content} glass-card`}
        >
          <h1 className={styles.heading}>Smarter Rides. Simpler Lives.</h1>
          <p className={styles.paragraph}>
            <strong>DaftarRoute</strong> isn’t just about rides — it’s data
            wizardry making your office trip smarter.
          </p>
        </div>
      </div> */}

      <motion.section
        className={styles.section}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <div className={styles.text}>
          <span>Powered by Intelligence</span>
          <p>
            {/* <strong>DaftarRoute</strong> isn’t just about rides — it’s data
            wizardry making your office trip smarter. */}
            More than rides, DaftarRoute uses data intelligence to transform
            your daily office commute
          </p>
        </div>
        <div className={styles.imageWrapper} style={{marginTop:"13px"}}>
          <Image src={main_3} alt="Company Icon" className={styles.icon} style={{marginRight:"-97px"}} />
        </div>
      </motion.section>
      {/* Zigzag Sections */}
      <div className={styles.wrapper}>
        {/* Section 1 */}
        {/* <section className={styles.section}>
          <div className={styles.imageWrapper}>
            <Image
              src={The_company}
              alt="Company Icon"
              className={styles.icon}
            />
          </div>
          <div className={styles.text}>
            <h2>The Company</h2>
            <p>
              DaftarRoute isn't just another commuting online platform; it's a
              fusion of innovation and tech wizardry. We're your partners in
              revolutionizing the daily office commute, driven by cutting-edge
              technology and a passion for seamless experiences. Our platform
              isn't just a means for sharing cabs - it's a marvel of data
              engineering, orchestrating efficient fleet management and eTMS
              with finesse. We're all about turning complex data into simple,
              intuitive solutions, making your commute smarter and more
              efficient.
            </p>
          </div>
        </section> */}

        {/* Section 2 (Reversed layout) */}
        <motion.section
          className={styles.sectiontwo}
          style={{ marginTop: "80px" }}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          <div className={styles.imageWrappertwo}>
            <Image
              src={team}
              alt="Who We Are Icon"
              className={styles.icon}
              style={{ marginTop: "312px",marginLeft:"-18px" }}
            />
          </div>
          <div className={styles.texttwo}>
            <span>The Tech Behind Every Commute</span>
            {/* <p>
              DaftarRoute is built for companies that care about how their
              employees get to work. We understand that behind every late
              arrival is a professional juggling deadlines, stress, and personal
              sacrifices. That’s why we’ve created a reliable employee
              transportation service, one that gives teams back control over
              their time. Our journey started with building scalable tech for
              cloud infrastructure and real-time systems. Today, we use that
              same expertise to power smarter commutes. From dynamic fleet
              tracking to our enterprise-ready Transport Management System
              (eTMS), DaftarRoute offers everything companies need to optimize
              and manage employee transport at scale. Since 2017, we’ve helped
              thousands of professionals across India reach the office on time,
              cutting costs, improving reliability, and supporting sustainable
              urban mobility. DaftarRoute isn't just another vendor. We're your
              mobility partner, engineering commutes that work in real-world
              traffic, at real-world scale.
            </p> */}
            <p>
              DaftarRoute is built for companies that value how employees get to
              work. We know that behind every late arrival is a professional
              juggling deadlines, stress, and personal sacrifices. That’s why we
              deliver reliable employee transport that gives teams back control
              over their time. Born from our expertise in scalable cloud
              infrastructure and real-time systems, we now power smarter
              commutes from dynamic fleet tracking to our enterprise-ready
              Transport Management System (eTMS). Since 2017, we’ve helped
              thousands of professionals across India reach the office on time,
              cut costs, boost reliability, and promote sustainable mobility.
              DaftarRoute isn’t just a vendor, we’re your mobility partner,
              engineering commutes that work in real-world traffic at real-world
              scale
            </p>
          </div>
        </motion.section>
        <motion.section
          className={styles.sectiontwo}
          style={{ marginTop: "80px",gap:"10rem" }}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          <section className={styles.coreValuesSection} style={{marginLeft:"-36px"}}>
            <span className={styles.coreValuesHeading}>Core Values </span>
            <div className={styles.coreValuesGrid}>
              <div className={styles.coreValueCard}>
                {/* <div className={styles.coreValueTitle}>“Data First”</div> */}
                <div className={styles.coreValueTitle}>"Data Centeic”</div>
                <div className={styles.coreValueDesc}>
                  We let real-time metrics drive decisions.
                </div>
              </div>
              <div className={styles.coreValueCard}>
                {/* <div className={styles.coreValueTitle}>“Customer Obsessed”</div> */}
                <div className={styles.coreValueTitle}>"Customer First”</div>
                <div className={styles.coreValueDesc}>
                  Every feature begins with a pain-point.
                </div>
              </div>
              <div className={styles.coreValueCard}>
                <div className={styles.coreValueTitle}>
                  “One Planet Positive/ Carbon Smart”
                </div>
                <div className={styles.coreValueDesc}>
                  Reducing idle time, cutting carbon.
                </div>
              </div>
              <div className={styles.coreValueCard}>
                <div className={styles.coreValueTitle}>
                  “Engineering Excellence”
                </div>
                <div className={styles.coreValueDesc}>
                  Code that thrives in chaos.
                </div>
              </div>
            </div>
          </section>{" "}
          <div className={styles.imageWrappertwo}>
            <Image
              src={values}
              alt="Who We Are Icon"
              className={styles.icon}
              style={{ marginTop: "297px",marginRight:"-83px" }}
            />
          </div>
        </motion.section>
        {/* Core Values Section */}

        {/* Section 3 */}
        {/* <section className={styles.section}>
          <div className={styles.imageWrapper}>
            <Image src={why_us} alt="Why Us Icon" className={styles.icon} />
          </div>
          <div className={styles.text}>
            <h2>Why Us</h2>
            <p>
              We're not just a ride-sharing platform; we're tech innovators on a
              mission to make commuting hassle-free. Expect a blend of robust
              technology and a touch of delight, whether it's the precision of
              our data cloud architectures or the efficiency of our data
              engineering pipelines. Join us in redefining commuting experiences
              through the magic of technology and a commitment to seamless
              rides.
            </p>
          </div>
        </section> */}
      </div>

      {/* Founder Cards Section with spring animation */}
      {/*
      <motion.section
        className={styles.founderCardsSection}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 8 }}
      >
      */}
      {/* Feature Cards Section (above founders card) */}
      <section className={styles.featureSection}>
        <span className={styles.featureHeading}>Why Choose Daftarroute?</span>
        <div className={styles.featureCardsGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              {/* You can replace with an SVG or icon */}
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="24" fill="#EAF3FF" />
                <path
                  d="M16 32l8-8 8 8"
                  stroke="#4A9A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 24V16"
                  stroke="#4A9A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.featureTitle}>Smart Fleet Management</div>
            <div className={styles.featureDesc}>
              Automate dispatch, reduce idle-time, and always know exactly where
              your vehicles are.
            </div>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="24" fill="#EAF3FF" />
                <path
                  d="M16 24h16M24 16l8 8-8 8"
                  stroke="#4A9A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.featureTitle}>
              Dynamic Route Optimization
            </div>
            <div className={styles.featureDesc}>
              Automatically recalculates the fastest, most efficient routes in
              real time—minimizing delays and fuel.
            </div>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="24" fill="#EAF3FF" />
                <path
                  d="M16 32V16h16v16"
                  stroke="#4A9A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 24v8"
                  stroke="#4A9A38"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.featureTitle}>
              Data-Backed Analytics & Reporting
            </div>
            <div className={styles.featureDesc}>
              Turn raw trip and vehicle data into actionable insights with
              customizable dashboards and automated reports.
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className={styles.founderCardsSection}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        <div className={styles.founderCardsContainer}>
          {/* Founder Card */}
          <div className={styles.founderCard} style={{ display: "flex" }}>
            <div >
              <div className={styles.founderImageWrapper}>
                <Image
                  src="/assets/about_us/founder1.jpeg"
                  alt="Founder"
                  width={120}
                  height={120}
                  className={styles.founderImage}
                />
              </div>
              <div className={styles.founderInfo}>
                <h3 className={styles.founderName}>Prabhat singh</h3>
                <p className={styles.founderSchooling}>
                  Makhanlal Chaturvedi University, Bhopal
                  <br />
                  M.Sc. in Computer Science
                </p>
              </div>
            </div>
            <div style={{width:"35rem"}}>
              <h4 className={styles.thoughtTitle}>Founder's Thoughts</h4>
              <p className={styles.thoughtText}>
                "We knew there’d be a time when commuting drained people more
                than their work and sustainability would be at risk. DaftarRoute
                was built to change that, turning daily travel into something
                meaningful, efficient, and powered by tech that puts people
                first."
              </p>
            </div>
          </div>

        </div>
      </motion.section>
      {/* Call-to-Action Section (animated, left to right) */}
      <Timeline />
      <motion.section
        className={styles.ctaSection}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        <div className={styles.ctaContentWrapper}>
          <div className={styles.ctaTextBlock}>
            <span className={styles.ctaHeading}>
              One Stop Solution for Corporate Transportation Needs
            </span>
            <ul className={styles.ctaList}>
              <li>
                {" "}
                <span className="icon">
                  <Image
                    src={phone}
                    alt="phone"
                    style={{
                      width: "20px",
                      height: "20px",
                      filter: "invert(1)",
                    }}
                    // className="animated-vehicle bus"
                  />
                </span>{" "}
                15 min call to review your needs
              </li>
              <li>💡 Get insights from sites similar to yours</li>
            </ul>
            <button className={styles.ctaButton}>Contact Support</button>
          </div>
          <div className={styles.ctaImageBlock}>
            <Image
              src="/assets/HeroSectionImg/Order_ride_bro.png"
              alt="Assessment Preview"
              width={220}
              height={140}
              className={styles.ctaImage}
            />
          </div>
        </div>
      </motion.section>
      {/* <Footer /> */}
    </div>
  );
}
