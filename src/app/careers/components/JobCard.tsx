import React from "react";
import "./../careers.css";

interface JobCardProps {
  title: string;
  type: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, type }) => {
  return (
    <div className="job-card">
      <p className="job-type">{type}</p>
      <h3 className="job-title">{title}</h3>
      <p className="job-desc">
        Exciting opportunity to join a growing mobility-tech company!
      </p>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
