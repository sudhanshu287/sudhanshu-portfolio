import React from "react";
import "./TechStack.css";
const TechStack = ({ techStack }) => {
  return (
    <div className="tech__stack__list">
      {techStack.map((item,index) => (
        <span key={index} className="tech__name"># {item}</span>
      ))}
    </div>
  );
};

export default TechStack;
