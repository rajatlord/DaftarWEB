import React from "react";
import AnimatedCar from "../../../assets/Sedan.png";
import AnimatedBus from "../../../assets/Sedan.png";
import "./Footer.style.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      {/* Top Bar Section */}
      <div className="footer-top-bar">
        <div className="footer-top-item">
          <span className="icon">📞</span>
          <span className="label">CALL US</span>
          <span className="value">Call: 7701-900-819</span>
        </div>
        <div className="footer-top-item">
          <span className="icon">✉️</span>
          <span className="label">EMAIL US</span>
          <span className="value">hello@daftarroute.com</span>
        </div>
        <div className="footer-top-item">
          <span className="icon">⏰</span>
          <span className="label">OPENING HOURS</span>
          <span className="value">Mon - Sat: 9am - 9pm</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="footer-main-content">
        <div className="footer-column">
          <h3>WE GOT YOUR BACK</h3>
          <p>
            At DaftarRoute, we&apos;re dedicated to ensuring your daily commute
            is not just convenient, but optimized for your comfort and precisely
            schedule, ensuring a seamless commute tailored to your office hours.
          </p>
          <div className="vocal-for-local">
            <div className="icon-graphic">🇮🇳</div>{" "}
            {/* Placeholder for the graphic */}
            <span className="text">Vocal for local</span>
          </div>
        </div>

        <div className="footer-column">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>
              <a href="#">- Office sharing Cabs</a>
            </li>
            <li>
              <a href="#">- Women-Friendly cabs</a>
            </li>
            <li>
              <a href="#">- Home pickup & drop</a>
            </li>
            <li>
              <a href="#">- Weekly & Monthly Subscription plan</a>
            </li>
            <li>
              <a href="#">- Outstation Rental & Events</a>
            </li>
            <li>
              <a href="#">- Employee Transport Solution for business</a>
            </li>
            <li>
              <a href="#">- SAAS solutions for eTMS</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>LOCATIONS</h3>
          <ul>
            <li>
              <a href="#">- Gurugram, India</a>
            </li>
            <li>
              <a href="#">- San Diego, US</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="social-links">
          <a href="#" className="social-link">
            🌐
          </a>{" "}
          {/* Placeholder for social icons */}
          <a href="#" className="social-link">
            🔗
          </a>
          <a href="#" className="social-link">
            ✉️
          </a>
        </div>

        <div className="app-downloads">
          <div className="app-badge">
            <img src="/path/to/itunes-badge.png" alt="Get it on iTunes" />{" "}
            {/* Replace with actual image paths */}
          </div>
          <div className="app-badge">
            <img
              src="/path/to/google-play-badge.png"
              alt="Get it on Google Play"
            />{" "}
            {/* Replace with actual image paths */}
          </div>
        </div>

        <div className="payment-powered-by">
          <p>PAYMENT POWERED BY</p>
          <div className="payment-methods">
            <div className="payment-method-logo">
              <img src="/path/to/visa-logo.png" alt="Visa" />{" "}
              {/* Replace with actual image paths */}
            </div>
            <div className="payment-method-logo">
              <img src="/path/to/mastercard-logo.png" alt="Mastercard" />
            </div>
            <div className="payment-method-logo">
              <img src="/path/to/netbanking-logo.png" alt="Net Banking" />
            </div>
            <div className="payment-method-logo">
              <img src="/path/to/paytm-logo.png" alt="Paytm" />
            </div>
          </div>
        </div>
      </div>

      {/* NEW: Animation Section */}
      <div className="footer-animation-section">
        <Image
          src={AnimatedCar}
          alt="Animated Car"
          className="animated-vehicle car-1"
        />
        <Image
          src={AnimatedBus}
          alt="Animated Bus"
          className="animated-vehicle bus"
        />
        <Image
          src={AnimatedCar}
          alt="Animated Car"
          className="animated-vehicle car-2"
        />
      </div>

      {/* <div className="chat-widget">Any query, chat with us!</div> */}

      {/* Policy Links */}
      <div className="footer-policies">
        <a href="#">TERMS AND CONDITION</a>
        <a href="#">PRIVACY POLICY</a>
        <a href="#">REFUND POLICY</a>
      </div>
    </footer>
  );
};

export default Footer;
