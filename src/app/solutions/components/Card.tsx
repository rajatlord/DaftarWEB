import React from "react";
import { IconType } from "react-icons";
import "./../solutions.css";

interface CardProps {
  title: string;
  description: string;
  Icon?: IconType;
}

const Card: React.FC<CardProps> = ({ title, description, Icon }) => {
  return (
    <div className="card">
      {Icon && <Icon className="card-icon" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
