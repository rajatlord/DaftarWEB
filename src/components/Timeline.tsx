import styles from "./Timeline.module.css";


export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={styles.title}>
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
