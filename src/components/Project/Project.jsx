import "./Project.css";
import ReactDOM from "react-dom";
import { Label } from "../../components/Label/Label";
import { ArrowIcon } from "../../assets/svg/ArrowIcon";
import { CloseIcon } from "../../assets/svg/CloseIcon";

const Project = ({image,title,description,technologies=[],closeModal,handleNextProject,handleBeforeProject}) => {
  return ReactDOM.createPortal(
    <figure className="work__description">
      <img src={image} alt={`Project ${title}`} />
      <figcaption className="work__description--text">
        <p className="description__paragraph">{description}</p>
        <h3 className="work__description--title">Technologies Used</h3>
        <div className="project__technologies">
          {technologies.map((technologie,index) => <Label key={index} >{technologie}</Label>)}
        </div>
      </figcaption>
      <CloseIcon className="cerrar" onClick={() => closeModal()}/>
      <ArrowIcon className="project__slider project__slider-after" onClick={() => handleNextProject()}/>
      <ArrowIcon className="project__slider project__slider-before" onClick={() => handleBeforeProject()}/>
    </figure>,
    document.getElementById('modal')
  )
}

export { Project }
