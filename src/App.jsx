import { Summary } from "./components/Summary/Summary"
import { Page } from "./components/Page/Page"
import { Header } from "./components/Header/Header"
import { AboutMe } from "./components/AboutMe/AboutMe"
import { Resume } from "./components/Resume/Resume"
import { Work } from "./components/Work/Work"
import { Contact } from "./components/Contact/Contact"
import {useState} from 'react'
import "./App.css"

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
  //statw
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