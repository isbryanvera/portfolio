import "./ProjectCard.css";
import { classnames } from "../../utils/utilities";
import { EyeIcon } from "../../assets/svg/EyeIcon";

const ProjectCard = ({ project, handleUpdateProject, isExtended, openModal }) => {
  return (
    <div className={classnames(
        'project-card',
        {'is-extended': isExtended}
      )}
      onClick={() => {handleUpdateProject(); openModal()}}>
      <div className="project__thumbnail">
        <img className="project__image-preview" src={project.image} alt="" />
        <a className="project__category" href="">Web design</a>
        <EyeIcon/>
      </div>
      <div className="info__project"> 
        <p>Type: UX, UI, UXW, 3D</p>
        <h3>{project.title}</h3>
      </div>
    </div>
  )
}

export { ProjectCard }