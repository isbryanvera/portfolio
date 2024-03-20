import {Card} from '../Card/Card'
import './AboutMe.css'

function AboutMe() {

  const cards = [
    {
      icon: '/src/assets/code icon.svg',
      title: 'Web Development',
      text: "As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications."
    },
    {
      icon: '/src/assets/App.svg',
      title: 'App Development',
      text: "With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people's lives. Let's turn ideas into reality and shape the future together."
    },
    {
      icon: '/src/assets/ux icon.svg',
      title: 'UI/UX Designing',
      text: "Crafting visually appealing and intuitive user interfaces that offer a delightful user experience is something I'm truly fanatic about."
    },
    {
      icon: '/src/assets/Mentor icon.svg',
      title: 'Mentorship',
      text: "I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career."
    }
  ];

  return (
    <section className='about-me'>
       <p className='description'>
        Hello there! I&apos;m thrilled to welcome you to my portfolio. I am a passionate and versatile
        full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
        My journey in the world of web development has been nothing short of exhilarating, and 
        I constantly strive to enhance my skills and embrace emerging trends in the industry.
       </p>
       <h3 className='title'>What I do!</h3>
       <div className='information'>
       {cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} text={card.text} />
       ))}
       </div>
    </section>
  )
}

export {AboutMe}