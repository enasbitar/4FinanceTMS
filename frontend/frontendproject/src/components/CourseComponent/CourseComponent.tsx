import React from "react";
import "./CourseComponent.css";

type CourseComponentType = {
  name: string;
  description: string;
  creditNumber: number;
};

function CourseComponent(props: CourseComponentType) {
  return (
    <div className="course-component-container">
      <h2 className="course-name">{props.name}</h2>
      <p className="course-description">{props.description}</p>
      <h4>Number of credits: {props.creditNumber}</h4>
    </div>
  );
}

export default CourseComponent;
