import "./Project.css";
import { Tag } from "../../components/Tag/Tag";


const Project = ({ title, tags, img }) => {
  return (
    <div className="project">
      <img src={img} alt="Project" />
      <div className="project__info"> 
        <div className="tags">
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export { Project }