import { Accordion } from "../../components/Accordion/Accordion";
import "./Home.css";

//! Missing modularity in the CSS file.
function Home() {
  return (
    <>
      <Accordion></Accordion>
      <Accordion></Accordion>
    </>
  )
}

export { Home }