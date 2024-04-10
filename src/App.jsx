import { Summary } from "./pages/Summary/Summary"
import { Page } from "./pages/Page/Page"
import { Header } from "./components/Header/Header"
import { Resume } from "./pages/Resume/Resume"
import { Work } from "./pages/Work/Work"
import { Contact } from "./pages/Contact/Contact"
import { Home } from "./pages/Home/Home"
import { PageContext, PageProvider } from "./context/AppContext"
import "./styles/App.css"
import { Slider } from "./components/Slider/Slider"

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
  return (
    <PageProvider>
      <Header/>
      <main>
        <Summary></Summary>
        <div className="app-details">
          <p>"Desde sistemas sencillos hasta arquitecturas y escalas de gran nivel, ningún proyecto o característica es imposible. Este desarrollador es el complemento que tu equipo necesita, destacando en trabajo en equipo, comunicación asertiva y resolución de problemas para crear productos de otro nivel."</p>
          <Slider></Slider>
        </div>
        <PageContext.Consumer>
          {({currentPage}) => (
            <Page title={currentPage}>
              {renderSpecificPage(currentPage,pagesToNavigate)}
            </Page>
          )}
        </PageContext.Consumer>
      </main>
    </PageProvider>
  )
}

export default App