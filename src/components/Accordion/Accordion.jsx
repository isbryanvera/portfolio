import "./Accordion.css";
import { AccordionItem } from "../../components/AccordionItem/AccordionItem";

const whoAmI = function whoAmI() {
  return {
    name: 'Bryan Andres Vera Garcia',
    role: 'Web Developer & Salesforce Administrator',
    location: 'Ecuador',
    about: 'I am a passionate web developer and Salesforce administrator with a focus on creating impactful solutions. With a background in entrepreneurship and personal development, I strive to continuously learn and grow in my field.',
    languages: 'Spanish / English'
  }}

const whatIDo = function whatIDo() {
  return {
    summary: 'I specialize in web development and Salesforce administration, focusing on creating efficient and scalable solutions.',
    skills: ['JavaScript', 'HTML/CSS', 'Salesforce', 'React', 'Node.js'],
    projects: [
        { name: 'Project A', description: 'Developed a web application using React and Node.js.' },
        { name: 'Project B', description: 'Implemented custom Salesforce solutions for client needs.' }
    ]
  };
}

const strengths = function strengths() {
  return {
    technical: ['Problem-solving', 'Attention to detail', 'Quick learner'],
    personal: ['Adaptability', 'Team player', 'Effective communicator']
};
}

const achievements = function achievements() {
  return {
    technical: ['Problem-solving', 'Attention to detail', 'Quick learner'],
    personal: ['Adaptability', 'Team player', 'Effective communicator']
};
}

const Accordion = () => {
  return (
    <div className="accordion">
      <AccordionItem title={'whoAmI'} icon={'/src/assets/javascript.svg'} active={true}>
        {whoAmI}
      </AccordionItem>
      <AccordionItem title={'whatIDo'} icon={'/src/assets/react.svg'}>
        {whatIDo}
      </AccordionItem>
      <AccordionItem title={'strengths'} icon={'/src/assets/nodejs.svg'}>
        {strengths}
      </AccordionItem>
      <AccordionItem title={'achievements'} icon={'/src/assets/typescript.svg'}>
        {achievements}
      </AccordionItem>
    </div>
  );
}

export { Accordion }