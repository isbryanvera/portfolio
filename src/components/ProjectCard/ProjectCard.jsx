import "./ProjectCard.css";
import { classnames } from "../../utils/utilities";

const ProjectCard = ({ project, handleUpdateProject, isExtended }) => {

  // todo Optimizar la función styleTheComponent
  function styleTheComponent({ currentTarget }) {
    const parentElement = currentTarget.parentElement;
    const parentChilds = Array.from(parentElement.childNodes);
    console.log(parentChilds);
    
    parentChilds.forEach((element) => {
      element.classList.remove('playing');
    });
    currentTarget.classList.add('playing');
    handleUpdateProject();
  }

  return (
    <div className={classnames(
        'project-card',
        {'is-extended': isExtended}
      )}
      onClick={styleTheComponent}>
      <img src={project.image} alt="" />
      <h3>{project.title}</h3>
      <div className="infotop">
        <p>Type: UX, UI, UXW, 3D</p>
        <h3>{project.title}</h3>
      </div>
    </div>
  )
}

export { ProjectCard }