import { motion } from "framer-motion";
import styles from "./Timeline.module.css";

const timelineData = [
  {
    year: "2017",
    title: "Chapter One",
    description:
      "DaftarRoute was founded. We piloted the initial solution for smarter employee commutes.",
  },
  {
    year: "2019",
    title: "Chapter Two",
    description:
      "Launched our Real-Time Tracking system, bringing more transparency to daily routes.",
  },
  {
    year: "2021",
    title: "Chapter Three",
    description:
      "Released our robust eTMS (Transport Management System) module.",
  },
  {
    year: "2023",
    title: "Chapter Four",
    description:
      "Launched our app for seamless commuting, from booking to arrival.",
  },
  {
    year: "2025",
    title: "Chapter Five",
    description:
      "(Planned) Scaling the DaftarRoute experience to global enterprises.",
  },
];

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={styles.title}>
        {/* <h1>Daftar route</h1>
        <p>The startup</p> */}
      </div>
      <div className={styles.timelineList}>
        <div className={styles.checkpoint}>
            <div className={styles.year1}>2017</div>
            <span className={styles.dot}></span>
            <div className={styles.content}>
          <h1>Chapter One</h1>
          <p>
            DaftarRoute was founded. We piloted the initial solution for <br/>smarter
            employee commutes.
          </p></div>
        </div>
        <div className={styles.checkpoint}>
            <div className={styles.year2}>2019</div>
            <span className={styles.dot}></span>
            <div className={styles.content}>
          <h1>Chapter Two</h1>
          <p>
            Launched our Real-Time Tracking system, bringing more transparency to daily routes.
          </p></div>
        </div>
        <div className={styles.checkpoint}>
            <div className={styles.year3}>2021</div>
            <span className={styles.dot}></span>
            <div className={styles.content}>
          <h1>Chapter Three</h1>
          <p>
            Released our robust eTMS (Transport Management System) <br/>module.
          </p></div>
        </div>
        <div className={styles.checkpoint}>
            <div className={styles.year4}>2023</div>
            <span className={styles.dot}></span>
            <div className={styles.content}>
          <h1>Chapter Four</h1>
          <p >
            Launched our app for seamless commuting,from booking to arrival.
          </p></div>
        </div>
        <div className={styles.checkpoint}>
            <div className={styles.year5}>2025</div>
            <span className={styles.dot}></span>
            <div className={styles.content}>
          <h1>Chapter Five</h1>
          <p>
            (Planned) Scaling the DaftarRoute experience to <br/>global enterprises.
          </p></div>
        </div>
      </div>
    </div>
  );
}
