import React from "react";

function ProjectItem({ name, about, technologies }) {

  // const technologiesItem = technologies.split(technologies)

  const mapTech = technologies.map( (technology, index) =>
    <span key={index}>{technology}</span> )

  console.log(technologies)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {mapTech}
        {/* <span>
          {technologies[0]}
        </span>
        <span>
          {technologies[1]}
        </span>
        <span>
          {technologies[2]}
        </span> */}
      </div>
    </div>
  );
}

export default ProjectItem;
