import React from "react";
import "./ProjectDescription.css";
const ProjectDescription = ({ description }) => {
  console.log(description);
  return (
    <ul className="description__list">
      {description.map((item) => (
        <li className="description__list__item">{item}</li>
      ))}
    </ul>
  );
};

export default ProjectDescription;
