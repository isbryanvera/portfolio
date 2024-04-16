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
        <div key={index} className="line-code">
          <span className="number-line"></span>
          <p className="line-content" >
            <span dangerouslySetInnerHTML={{ __html: line }} />
          </p>
        </div>
      ))}
    </pre>
  );
}

export { AccordionContent }
