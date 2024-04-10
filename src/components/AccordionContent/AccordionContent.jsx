import { styleStringLikeACodeOfAProgrammingLanguage } from "../../utils/formatedStrings";
import "./AccordionContent.css";

const AccordionContent = ({ children, coincidences}) => {
  if (!children) {
    return 'No hay texto';
  }

  const formattedLines = styleStringLikeACodeOfAProgrammingLanguage(children, coincidences);
  return (
    <pre>
      {formattedLines.map((line, index) => (
        <p className="line-content" key={index}>
          <span className="line"></span>
          <span dangerouslySetInnerHTML={{ __html: line }} />
        </p>
      ))}
    </pre>
  );
}

export { AccordionContent }
