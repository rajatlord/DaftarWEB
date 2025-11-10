import React from "react";
import AnimatedCar from "../../../assets/Sedan.png";
import AnimatedBus from "../../../assets/Sedan.png";
import phone from "../../../public/assets/footer/phone.png"
import email from "../../../public/assets/footer/email.png"
import clock from "../../../public/assets/footer/clock.png"
import vocal from "../../../public/assets/footer/vocal.png"

import playstore from "../../../public/assets/footer/playstore.png"
import payments from "../../../public/assets/footer/payments.png"
import "./Footer.style.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      {/* Top Bar Section */}
      <div className="footer-top-bar">
        <div className="footer-top-item">
          <span className="icon"><Image
          src={phone}
          alt="phone"
          style={{width:"30px",height:"30px", filter: "invert(1)"}}
          // className="animated-vehicle bus"
        /></span>
          <span className="label">CALL US</span>
          <span className="value">Call: 7701-900-819</span>
        </div>
        <div className="footer-top-item">
          <span className="icon"><Image
          src={email}
          alt="email"
          style={{width:"30px",height:"30px", filter: "invert(1)"}}
          // className="animated-vehicle bus"
        /></span>
          <span className="label">EMAIL US</span>
          <span className="value">hello@daftarroute.com</span>
        </div>
        <div className="footer-top-item">
          <span className="icon"><Image
          src={clock}
          alt="clock"
          style={{width:"30px",height:"30px", filter: "invert(1)"}}
          // className="animated-vehicle bus"
        /></span>
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
          {/* <div className="vocal-for-local">
            <div className="icon-graphic">🇮🇳</div>{" "}
            Placeholder for the graphic
            <span className="text">Vocal for local</span>
          </div> */}
          <div>
            <Image
          src={vocal}
          alt="vocal for local"
          style={{width:"200px",height:"30px"}}
          // className="animated-vehicle bus"
        />
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
            {/* <Image src="/path/to/itunes-badge.png" alt="Get it on iTunes" /> */}
          </div>
          <div className="app-badge">
           <Image
          src={playstore}
          alt="playstore"
          style={{width:"100%",height:"100%", }}
          // className="animated-vehicle bus"
        />{" "}
            {/* Replace with actual image paths */}
          </div>
        </div>

        <div className="payment-powered-by">
          <p>PAYMENT POWERED BY</p>
          {/* <div className="payment-methods">
            <div className="payment-method-logo">
              <img src="/path/to/visa-logo.png" alt="Visa" />{" "}
              Replace with actual image paths
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
          </div> */}
        <Image
          src={payments}
          alt="payments"
          className="payment-methods-img"
          // className="animated-vehicle bus"
        />
        </div>
      </div>

      {/* NEW: Animation Section */}
      {/* <div className="footer-animation-section">
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
      </div> */}

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
