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
      <p>Number of projects <span>{data.length}</span></p>
      <div className="work__grid">
          {data.map((project, index) => {
            const isExtended = (index + 1) % 3 === 0;
            return <ProjectCard
              key={project.id}
              isExtended={isExtended} 
              project={project} 
              handleUpdateProject={() => handleUpdateProject(index)}/> 
          })}
      </div>
      <Project {...currentProject} />
    </div>
  )
}

export { Work }