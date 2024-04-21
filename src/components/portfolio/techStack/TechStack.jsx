import React from "react";
import "./TechStack.css";
const TechStack = ({ techStack }) => {
  console.log(techStack);
  return (
    <div className="tech__stack__list">
      {techStack.map((item) => (
        <span className="tech__name"># {item}</span>
      ))}
    </div>
  );
};

export default TechStack;
