import React from "react";
import "./ComingSoon.css";

const ComingSoon = ({ title, description }) => (
  <div className="coming-soon">
    <i className="ri-time-line"></i>
    <h4>{title}</h4>
    {description && <p>{description}</p>}
  </div>
);

export default ComingSoon;
