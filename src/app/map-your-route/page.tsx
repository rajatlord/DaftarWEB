"use client";
import { useState } from "react";
import styles from "@/styles/MapYourRoute.module.css";

export default function MapYourRoutePage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (from && to) {
      const encodedFrom = encodeURIComponent(from);
      const encodedTo = encodeURIComponent(to);

      // Google Maps Directions URL
      const url = `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${encodedFrom}&destination=${encodedTo}`;

      setMapUrl(url);
    }
  };

  return (
    <main className={styles.container}>
      <section className={styles.formSection}>
        <h2>Map Your Daftar Route</h2>
        <p className={styles.subText}>Plan your route & get an instant view of your commute</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Pickup Location</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="e.g. Connaught Place, Delhi"
            required
          />

          <label>Drop Location</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="e.g. Cyber City, Gurugram"
            required
          />

          <button type="submit">Show Route</button>
        </form>
      </section>

      <section className={styles.mapSection}>
        {mapUrl ? (
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={mapUrl}
          ></iframe>
        ) : (
          <div className={styles.placeholder}>
            <p>Enter your locations to view your route 🚗</p>
          </div>
        )}
      </section>
    </main>
  );
}
