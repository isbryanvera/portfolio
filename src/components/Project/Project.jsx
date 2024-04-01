import "./Project.css";
import { Label } from "../../components/Label/Label";

const Project = () => {
  return (
    <figure className="work__description">
      <img src="https://via.placeholder.com/220" alt="Project" />
      <figcaption className="work__description--text">
        <p>Hello there! I`m thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies.</p>
        <h3 className="work__description--title">Technologies Used</h3>
        <div className="project__technologies">
          <Label>
            JavaScript
          </Label>
          <Label>
            NodeJs
          </Label>
          <Label>
            React
          </Label>
          <Label>
            Tailwind
          </Label>
        </div>
      </figcaption>
    </figure>
  )
}

export { Project }
