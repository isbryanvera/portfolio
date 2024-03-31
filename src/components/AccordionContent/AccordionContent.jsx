import { formatStringLikeACodeOfAProgrammingLanguage } from "../../utils/formatedStrings";
import "./AccordionContent.css";

const AccordionContent = ({ children, coincidences }) => {
  if (!children) {
    return 'No hay texto';
  }

  const formattedLines = formatStringLikeACodeOfAProgrammingLanguage(children, coincidences);
  // console.log(createCoincidences(children));

  return (
    <pre>
      {formattedLines.map((section, index) => (
        <p className="line-content" key={index}>
          <span className="line"></span>
          <span dangerouslySetInnerHTML={{ __html: section }} />
        </p>
      ))}
    </pre>
  );
}

export { AccordionContent }
