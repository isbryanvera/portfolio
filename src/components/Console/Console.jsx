import { AccordionContent } from '../AccordionContent/AccordionContent';
import { RED, BLUE, GREEN } from "../../utils/variables";
import { findTheKeysOfTheCode } from "../../utils/formatedStrings";
import './Console.css';

const whoAmI = function whoAmI() {
  return {
    name: 'Bryan Andres Vera Garcia',
    role: 'Web Developer & Salesforce Administrator',
    location: 'Ecuador',
    about: 'I am a passionate web developer and Salesforce administrator with a focus on creating impactful solutions. With a background in entrepreneurship and personal development, I strive to continuously learn and grow in my field.',
    languages: 'Spanish / English'
  }}

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

const Console = () => {
  const textInformation = convertedCodeToString(whoAmI);
  const title = 'WhoAmI'

  return (
    <div>
      <div className='explorer-files'>
        <span>Pestaña 1</span>
        <span>Pestaña 2</span>
        <span>Pestaña 3</span>
        <span>Pestaña 4</span>
        <span>Pestaña 5</span>
      </div>
      <div className='console'>
      <AccordionContent coincidences={createCoincidences(textInformation, title)} >{textInformation}</AccordionContent>
      </div>
    </div>
  );
};

export { Console };
