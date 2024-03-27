import { Summary } from "./Pages/Summary/Summary"
import { Page } from "./Pages/Page/Page"
import { Header } from "./components/Header/Header"
import { AboutMe } from "./Pages/AboutMe/AboutMe"
import { Resume } from "./Pages/Resume/Resume"
import { Work } from "./Pages/Work/Work"
import { Contact } from "./Pages/Contact/Contact"
import {useState} from 'react'
import "./styles/App.css"

function renderSpecificPage(page, options) {
  return options[page]
}

function App() {
  const pagesToNavigate = {
    Home: <AboutMe></AboutMe>,
    Resume: <Resume></Resume>,
    Work : <Work></Work>,
    Contact : <Contact></Contact>
  }
  //state
  const [currentPage,setCurrentPage] = useState('Home'); // Valor por defecto del estado la primera vez que se renderiza el componente

  return (
    <>
      <Header></Header>
      <main>
        <Summary></Summary>
        <Page title={currentPage} setCurrentPage={setCurrentPage}>
          {renderSpecificPage(currentPage,pagesToNavigate)}
        </Page>
      </main>
    </>
  )
}

export default App