import "./ProjectCard.css";

const ProjectCard = ({ project, handleUpdateProject }) => {

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
    <div className="project-card" onClick={styleTheComponent}>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    
      <div className="infotop">
        <h3>{project.title}</h3>
        <a href={project.link}>See More</a>
      </div>
    </div>
  )
}

export { ProjectCard }