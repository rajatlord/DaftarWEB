"use client";
import React from "react";
import "./ConcernFormNew.css";

interface ConcernData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface ConcernFormProps {
  concernData: ConcernData;
  setConcernData: React.Dispatch<React.SetStateAction<ConcernData>>;
  onSubmit: () => void;
}

const ConcernForm: React.FC<ConcernFormProps> = ({
  concernData,
  setConcernData,
  onSubmit,
}) => {
  return (
    <div className="concern-form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="concern-form-box"
      >
        <h2 className="concern-form-title">Submit Your Concern</h2>
        <input
          type="text"
          placeholder="Name"
          value={concernData.name}
          onChange={(e) =>
            setConcernData({ ...concernData, name: e.target.value })
          } required
          className="concern-form-input"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={concernData.phone}
          onChange={(e) =>
            setConcernData({ ...concernData, phone: e.target.value })
          } required
          className="concern-form-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={concernData.email}
          onChange={(e) =>
            setConcernData({ ...concernData, email: e.target.value })
          } required
          className="concern-form-input"
        />
        <textarea
          placeholder="Message"
          value={concernData.message}
          onChange={(e) =>
            setConcernData({ ...concernData, message: e.target.value })
          } required
          className="concern-form-input concern-form-textarea"
        />
        <button type="submit" className="concern-form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConcernForm;
