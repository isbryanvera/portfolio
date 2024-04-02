import "./Work.css";
import json from "../../data/project.json"
import { Project } from "../../components/Project/Project";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { useState, useCallback } from "react";

const data = json
const initialPosition = data[0]

function Work() {
  const [currentProject, setCurrentProject] = useState(initialPosition)

  const handleUpdateProject = useCallback((index) => {
    setCurrentProject(data[index]);
  },[]);

  return (
    <div className="work">
      <div className="work__list">
        <p>Number of projects <span>{data.length}</span></p>
        <div className="work__list-projects">
          {data.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              handleUpdateProject={() => handleUpdateProject(index)}
            />
          ))}
        </div>
      </div>
      <Project {...currentProject} />
    </div>
  )
}

export { Work }
