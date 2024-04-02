import "./ProjectCard.css";

const ProjectCard = ({ project, handleUpdateProject }) => {

  function styleTheComponent({ currentTarget }) {
    const parentElement = currentTarget.parentElement;
    const parentChilds = Array.from(parentElement.childNodes);
    
    parentChilds.forEach((element) => {
      element.classList.remove('glow-on-hover');
    });
    currentTarget.classList.add('glow-on-hover');
    handleUpdateProject();
  }

  return (
    <div className="project-card" onClick={styleTheComponent}>
          <h3>{project.title}</h3>
          <a href={project.link}>See More</a>
    </div>
  )
}

export { ProjectCard }