/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import main_3 from "../../../public/assets/about_us/main-5.jpg";
import phone from "../../../public/assets/footer/phone.png";
import gif from "../../../public/assets/about_us/traffic-jam-rush-hour.gif";
import team from "../../../public//assets/about_us/team.jpg";
import values from "../../../public//assets/about_us/values.jpg";
import styles from "./about.module.css";
import Timeline from "@/components/Timeline";

export default function About() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className={styles.heading}
      // style={{

      // }}
      >
        <section className={styles.hero} style={{ paddingTop: "0" }}>
          <h1 className={styles.bold}>Reimagining</h1>

          <div className={styles.line}>
            <span className={styles.thin}>Corporate</span>
            <div className={styles.pill}>
              <Image src={gif} alt="Tech Image" />
            </div>
            <span className={styles.thin}>Commuting</span>
          </div>
          <h2 className={styles.bold}>Solutions!</h2>
          <p className={styles.caption}>
            That Deliver Efficiency, and Productivity
          </p>
        </section>
      </motion.h2>

      <div className={styles.wrapper}>
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
              More than rides, DaftarRoute uses data intelligence to transform
              your daily office commute
            </p>
          </div>
          <div className={styles.imageWrapper} style={{ marginTop: "14px" }}>
            <Image src={main_3} alt="Company Icon" className={styles.icon} />
          </div>
        </motion.section>
      </div>
      <div className={styles.wrapper}>
        <motion.section
          className={styles.sectiontwo}
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
            />
          </div>
          <div className={styles.texttwo}>
            <span>The Tech Behind Every Commute</span>
            <p>
              DaftarRoute is built for companies that value how employees get to
              work. We know that behind every late arrival is a professional
              juggling deadlines, stress, and personal sacrifices. That&apos;s why we
              deliver reliable employee transport that gives teams back control
              over their time. Born from our expertise in scalable cloud
              infrastructure and real-time systems, we now power smarter
              commutes from dynamic fleet tracking to our enterprise-ready
              Transport Management System (eTMS). Since 2017, we&apos;ve helped
              thousands of professionals across India reach the office on time,
              cut costs, boost reliability, and promote sustainable mobility.
              DaftarRoute isn&apos;t just a vendor, we&apos;re your mobility partner,
              engineering commutes that work in real-world traffic at real-world
              scale
            </p>
          </div>
        </motion.section>
        <div className={styles.wrapper}>
          <motion.section
            className={styles.sectiontwo}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            <section className={styles.coreValuesSection}>
              <span className={styles.coreValuesHeading}>Core Values </span>
              <div className={styles.coreValuesGrid}>
                <div className={styles.coreValueCard}>
                  <div className={styles.coreValueTitle}>&quot;Data Centeic&quot;</div>
                  <div className={styles.coreValueDesc}>
                    We let real-time metrics drive decisions.
                  </div>
                </div>
                <div className={styles.coreValueCard}>
                  <div className={styles.coreValueTitle}>&quot;Customer First&quot;</div>
                  <div className={styles.coreValueDesc}>
                    Every feature begins with a pain-point.
                  </div>
                </div>
                <div className={styles.coreValueCard}>
                  <div className={styles.coreValueTitle}>
                    &quot;One Planet Positive/ Carbon Smart&quot;
                  </div>
                  <div className={styles.coreValueDesc}>
                    Reducing idle time, cutting carbon.
                  </div>
                </div>
                <div className={styles.coreValueCard}>
                  <div className={styles.coreValueTitle}>
                    &quot;Engineering Excellence&quot;
                  </div>
                  <div className={styles.coreValueDesc}>
                    Code that thrives in chaos.
                  </div>
                </div>
              </div>
            </section>
            <div className={styles.imageWrappertwo}>
              <Image
                src={values}
                alt="Who We Are Icon"
                className={styles.icon}
              />
            </div>
          </motion.section>
        </div>
      </div>

      <div className={styles.wrapperTwo}>
        <div className={styles.featureParent}>
          {/* <div className={styles.featureImageWrapper}>
            <img
              src="/assets/about_us/main-5.jpg"
              alt="Feature Visual"
              className={styles.featureImage}
            />
          </div> */}
          <section className={styles.featureSection}>
            <span className={styles.featureHeading}>Why Choose Daftarroute?</span>
            <div className={styles.featureCardsGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
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
        </div>
      </div>

      <motion.section
        className={styles.founderCardsSection}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        <div className={styles.founderCardsContainer}>
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
            <div style={{ width: "35rem" }} className={styles.founderThoughts}>
              <h4 className={styles.thoughtTitle}>Founder&apos;s Thoughts</h4>
              <p className={styles.thoughtText}>
                &quot;We knew there&apos;d be a time when commuting drained people more
                than their work and sustainability would be at risk. DaftarRoute
                was built to change that, turning daily travel into something
                meaningful, efficient, and powered by tech that puts people
                first.&quot;
              </p>
            </div>
          </div>

        </div>
      </motion.section>
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
                  />
                </span>
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
    </div>
  );
}
