import "./Project.css";
import { Label } from "../../components/Label/Label";

const Project = ({image,title,description,technologies=[]}) => {
  return (
    <figure className="work__description">
      <img src={image} alt={`Project ${title}`} />
      <figcaption className="work__description--text">
        <p className="description__paragraph">{description}</p>
        <h3 className="work__description--title">Technologies Used</h3>
        <div className="project__technologies">
          {technologies.map((technologie,index) => <Label key={index} >{technologie}</Label>)}
        </div>
      </figcaption>
    </figure>
  )
}

export { Project }
