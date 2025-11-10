import React from "react";
import "./../careers.css";

const ApplyForm = () => {
  return (
    <form className="apply-form">
      <h3>Join Our Team</h3>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <input type="text" placeholder="Your Position" />
      <textarea placeholder="Enter your message"></textarea>
      <button type="submit" className="apply-btn">
        Submit
      </button>
    </form>
  );
};

export default ApplyForm;
