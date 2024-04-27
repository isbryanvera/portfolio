import { BashIcon } from "../../assets/svg/BashIcon";
import { DataRow } from "../../components/DataRow/DataRow";
import { Slider } from "../../components/Slider/Slider";
import "./Home.css";

const data = [
  { subject: 'Phone', text: '+57 3112535030', icon: "/src/assets/gridicons_phone.svg" },
  { subject: 'Email', text: 'brayanandresveragar@gmail.com', icon: "/src/assets/mdi_email-open-outline.svg" },
  { subject: 'Location', text: 'Bogotá, Colombia', icon: "/src/assets/ion_location-outline.svg" }
]

function Home() {
  return (
    <div className="app-details">
      <div className="home__introduce">
        <p className="about-me__hook">Welcome to my portfolio, today you&apos;ll find your <span className="type-writing">Next developer</span></p>
        <BashIcon />
      </div>
      <div className="home__highlighted-information">
        <p className="home__summary">Desde sistemas sencillos hasta arquitecturas y escalas de gran nivel, ningún proyecto o característica es imposible. Este desarrollador es el complemento que tu equipo necesita, destacando en trabajo en equipo, comunicación asertiva y resolución de problemas para crear productos de otro nivel.</p>
        <div className="home__metrics">
          <div className="home__fun-facts">
            <p><span>1</span> Year of experience</p>
            <p><span>3</span> Freelance projects</p>
            <Slider></Slider>
          </div>
          <article className="summary__details">
            <div className="summary__contact">
              {data.map((info) => {
                return (
                  <DataRow key={info.subject} subject={info.subject} text={info.text} icon={info.icon} />
                )
              })}
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export { Home }