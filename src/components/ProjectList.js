import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const mapProjects = projects.map( projects => 
  <ProjectItem key={projects.id} project={projects} name={projects.name} about={projects.about} technologies={projects.technologies}/> )

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {mapProjects}
      </div>
    </div>
  );
}

export default ProjectList;
