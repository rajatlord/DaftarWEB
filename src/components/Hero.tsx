import React from "react";
import "./Hero.style.css"; // Import the CSS file

const Hero: React.FC = () => {
  return (
    <section className="hero-container">
      <div className="curved-background"></div>{" "}
      {/* This creates the dark curved background */}
      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="headline">A Smart Mobility to Work</h1>
          <p className="sub-headline">
            Get your Monthly Subscription today and commute to work hassle free
          </p>
        </div>
        <div className="form-wrapper">
          <form className="form-container">
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="e.g., Pitampura, New Delhi"
              />
              <label className="form-label">Home Address</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="e.g. DLF Tower 10th Rd"
              />
              <label className="form-label">Work Address</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Number of working days, i.e 5 days or 6 days in a week"
              />
              <label className="form-label">No of working days</label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Choose your monthly subscription
              </label>
              <select className="form-select" defaultValue="3 Months">
                <option value="1 Month">1 Month</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="12 Months">12 Months</option>
              </select>
            </div>
            <button type="submit" className="submit-button">
              Get quote
            </button>
          </form>
        </div>
      </div>
      {/* <div className="chat-widget">Any query, chat with us!</div> */}
    </section>
  );
};

export default Hero;
