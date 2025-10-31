import Image from "next/image";
import { FaBusAlt, FaMapMarkerAlt, FaSatelliteDish, FaChartBar, FaUsersCog } from "react-icons/fa";
import styles from "./service.module.css";

export default function Service() {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.servicesHeading}>Our Services</h2>
      <div className={styles.servicesContent}>
        <div className={styles.servicesList}>
          <ul>
            <li>
              <FaBusAlt className={styles.icon} />
              <p>Tech-enabled employee transportation services with fixed routes</p>
            </li>
            <li>
              <FaMapMarkerAlt className={styles.icon} />
              <p>Office pick-up and drop services aligned to shift timings</p>
            </li>
            <li>
              <FaSatelliteDish className={styles.icon} />
              <p>Live tracking for employees and transport admins</p>
            </li>
            <li>
              <FaChartBar className={styles.icon} />
              <p>Admin dashboard for rosters, ride history, and reporting</p>
            </li>
            <li>
              <FaUsersCog className={styles.icon} />
              <p>Fully managed fleet and drivers under one system</p>
            </li>
          </ul>
        </div>
        <div className={styles.servicesImage}>
          <Image
            src="/assets/about_us/main_4.jpg"
            alt="Our Services"
            width={500}
            height={400}
            style={{ borderRadius: "20px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
