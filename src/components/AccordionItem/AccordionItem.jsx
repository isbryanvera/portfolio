import { Label } from "../../components/Label/Label";
import { findTheKeysOfTheCode } from "../../utils/formatedStrings";
import { AccordionContent } from "../AccordionContent/AccordionContent";
import { RED, BLUE, GREEN } from "../../utils/variables";
import "./AccordionItem.css";
import { useEffect, useState } from "react";

function toggleAccordion(e) {
  const content = e.currentTarget.nextElementSibling;
  //Close the others accordions when one is open
  const accordions = document.querySelectorAll('.accordion-content');
  accordions.forEach(accordion => {
    if (accordion !== content) {
      accordion.style.maxHeight = null;
    }
  })
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

const AccordionItem = ({ children, icon, title, active = false }) => {
  const [accordionOpen, setAccordionOpen] = useState('fit-content');

  const textInformation = convertedCodeToString(children);

  // Calcular la altura del contenido cuando se active el acordeón
  useEffect(() => {
    if (active) {
      const element = document.querySelector('.accordion-content');
      if (element) {
        const height = element.scrollHeight + 'px';
        setAccordionOpen(height);
      }
    }
  }, [active]);

  return (
    <div>
      <div className="accordion-item" onClick={toggleAccordion}>
        <Label icon={icon}>{`${title}.${extensionFile(icon)}`}</Label>
      </div>
      <div className={`accordion-content`} style={active ? { maxHeight: accordionOpen } : {}}>
        <AccordionContent coincidences={createCoincidences(textInformation, title)} >{textInformation}</AccordionContent>
      </div>
    </div>
  );
};

export { AccordionItem }