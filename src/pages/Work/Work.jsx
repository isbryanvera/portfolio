import "./Work.css";
import data from "../../data/project.json"
import { Project } from "../../components/Project/Project";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { useEffect, useState, useCallback } from "react";
import { useModal } from "../../hooks/useModal";

function Work() {
  const [currentIndexProject,setCurrentIndexProject] = useState(0);
  const [currentDataProject, setCurrentDataProject] = useState(data[0])
  const {stateModal,closeModal,openModal } = useModal()

  useEffect(() => {
    setCurrentDataProject(data[currentIndexProject])
  },[currentIndexProject])

  const handleUpdateProject = useCallback((index) => {
    setCurrentIndexProject(index)
  },[]);

  function handleNextProject(index){
    if(index + 1 < data.length){
      setCurrentIndexProject(index + 1)
    }else{
      setCurrentIndexProject(0)
    }
  }

  function handleBeforeProject(index){
    if(index > 0){
      setCurrentIndexProject(index - 1)
    }else{
      setCurrentIndexProject(data.length - 1)
    }
  }

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
              handleUpdateProject={() => handleUpdateProject(index)}
              openModal={openModal}/> 
          })}
      </div>
      {stateModal && (
          <Project 
            {...currentDataProject}
            closeModal={closeModal}
            handleNextProject={() => handleNextProject(currentIndexProject)}
            handleBeforeProject={() => handleBeforeProject(currentIndexProject)}/>
      )}
    </div>
  )
}

export { Work }