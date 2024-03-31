import { Label } from "../../components/Label/Label";
import { findTheKeysOfTheCode } from "../../utils/formatedStrings";
import { AccordionContent } from "../AccordionContent/AccordionContent";
import { RED, BLUE, GREEN } from "../../utils/variables";
import "./AccordionItem.css";

function toggleAccordion(e) {
  const content = e.currentTarget.nextElementSibling;
  content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
}

function extensionFile(svg) {
  const KIND_OF_EXTENSIONS = {
    'javascript': 'js',
    'react': 'jsx',
    'nodejs': 'js',
    'typescript': 'ts'
  };

  const icon = svg.match(/\w+(?=\.svg)/);
  return KIND_OF_EXTENSIONS[icon];
}

function convertedCodeToString(code){
  // Reemplazar saltos de línea por '#'
  return code 
    ? code.toString().replace(/\n+/g, '#') 
    : false;
}

function createCoincidences(string,title){
  if(string){
    const defaultCoincidences = {
      'function': BLUE,
      'return' : BLUE,
    }
    //Titulo de la función en rojo
    defaultCoincidences[title] = RED;

    //Claves del JSON en verde
    const keys = findTheKeysOfTheCode(string);
    for (let index = 0; index < keys.length; index++) {
      defaultCoincidences[keys[index]] = GREEN
    }
    return defaultCoincidences
  }
}

const AccordionItem = ({ children, icon, title, active }) => {
  const textInformation = convertedCodeToString(children)

  return(
    <div>
      <div className="accordion-item" onClick={toggleAccordion}>
        <Label icon={icon}>{`${title}.${extensionFile(icon)}`}</Label>
      </div>
      <div className="accordion-content">
        <AccordionContent coincidences={createCoincidences(textInformation,title)} >{textInformation}</AccordionContent>
      </div>
    </div>
)};

export { AccordionItem }