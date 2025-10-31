import React from "react";
import JobCard from "./JobCard";
import ApplyForm from "./ApplyForm";
import "./../careers.css";

const jobs = [
  { title: "Marketing Advisor", type: "Full Time / Part Time" },
  { title: "Supervisor", type: "Full Time" },
  { title: "Field Agent", type: "Part Time" },
  { title: "Receptionist", type: "Full Time / Part Time" },
];

const JoinSection = () => {
  return (
    <section className="join-section">
      <div className="join-header">
        <p className="tag">VACANCY / CAREER</p>
        <h2>
          Join <span>Our Team!</span>
        </h2>
        <p className="subtitle">
          Be part of Daftar Route — where innovation drives corporate commuting.
        </p>
      </div>

      <div className="join-grid">
        <div className="job-list">
          {jobs.map((job, index) => (
            <JobCard key={index} title={job.title} type={job.type} />
          ))}
        </div>
        <ApplyForm />
      </div>
    </section>
  );
};

export default JoinSection;
