import "./Work.css";
import { Project } from "../../components/Project/Project";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

function Work() {
  return (
    <div className="work">
      <div className="work__list">
        <p>Number of projects <span>5</span></p>
        <div className="work__list-projects">
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </div>
      </div>
      <Project></Project>
    </div>
  )
}

export { Work }
