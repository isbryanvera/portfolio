import { Summary } from "./Pages/Summary/Summary"
import { Page } from "./Pages/Page/Page"
import { Header } from "./components/Header/Header"
import { Resume } from "./Pages/Resume/Resume"
import { Work } from "./Pages/Work/Work"
import { Contact } from "./Pages/Contact/Contact"
import { Home } from "./Pages/Home/Home"
import {useState} from 'react'
import "./styles/App.css"
import Navigation from "./components/Navigation/Navigation"

function renderSpecificPage(page, options) {
  return options[page]
}

function App() {
  const pagesToNavigate = {
    Home: <Home></Home>,
    Resume: <Resume></Resume>,
    Work : <Work></Work>,
    Contact : <Contact></Contact>
  }
  //state
  const [currentPage,setCurrentPage] = useState('Home'); // Valor por defecto del estado la primera vez que se renderiza el componente

  return (
    <>
      <Header></Header>
      <div className="media-q">
        <Navigation setCurrentPage={setCurrentPage} sidePosition={true}></Navigation>
        <main>
          <Summary></Summary>
          <Page title={currentPage} setCurrentPage={setCurrentPage}>
            {renderSpecificPage(currentPage,pagesToNavigate)}
          </Page>
        </main>
      </div>
    </>
  )
}

export default App