import { Summary } from "./pages/Summary/Summary"
import { Page } from "./pages/Page/Page"
import { Header } from "./components/Header/Header"
import { Resume } from "./pages/Resume/Resume"
import { Work } from "./pages/Work/Work"
import { Contact } from "./pages/Contact/Contact"
import { Home } from "./pages/Home/Home"
import {useState} from 'react'
import "./styles/App.css"
import Navigation from "./components/Navigation/Navigation"

function renderSpecificPage(page, options) {
  return options[page]
}

const pagesToNavigate = {
  Home: <Home></Home>,
  Resume: <Resume></Resume>,
  Work : <Work></Work>,
  Contact : <Contact></Contact>
}

function App() {
  
  
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