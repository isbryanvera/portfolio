import { AccordionItem } from "../../components/AccordionItem/AccordionItem";
import "./Home.css";

const str = function whoAmI() {
  return {
    name: 'Bryan Andres Vera Garcia',
    role: 'Web Developer & Salesforce Administrator',
    location: 'Ecuador',
    about: 'I am a passionate web developer and Salesforce administrator with a focus on creating impactful solutions. With a background in entrepreneurship and personal development, I strive to continuously learn and grow in my field.',
    languages: ['Spanish', 'English']
  }
}

const Accordion = () => {
  return (
    <div className="accordion">
      <AccordionItem title={'whoAmI'} icon={'/src/assets/javascript.svg'}>
        {str}
      </AccordionItem>
      <AccordionItem title={'whatIDo'} icon={'/src/assets/react.svg'}></AccordionItem>
      <AccordionItem title={'strengths'} icon={'/src/assets/nodejs.svg'}></AccordionItem>
      <AccordionItem title={'achievements'} icon={'/src/assets/typescript.svg'}></AccordionItem>
    </div>
  );
}

function Home() {
  return (
    <>
      <Accordion></Accordion>
    </>
  )
}

export { Home }
