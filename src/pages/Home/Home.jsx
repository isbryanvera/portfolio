import { Slider } from "../../components/Slider/Slider";
import "./Home.css";

function Home() {
  return (
    <div className="app-details">
        <div>
          <p className="about-me__hook">Welcome to my portfolio, today you&apos;ll find your</p>
          <p className="about-me__hook type-writing">next developer</p>
        </div>
      <p>Desde sistemas sencillos hasta arquitecturas y escalas de gran nivel, ningún proyecto o característica es imposible. Este desarrollador es el complemento que tu equipo necesita, destacando en trabajo en equipo, comunicación asertiva y resolución de problemas para crear productos de otro nivel.</p>
      <Slider></Slider>
    </div>
  )
}

export { Home }