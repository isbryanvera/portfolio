import { Summary } from "./pages/Summary/Summary"
import { Page } from "./pages/Page/Page"
import { Header } from "./components/Header/Header"
import { Resume } from "./pages/Resume/Resume"
import { Work } from "./pages/Work/Work"
import { Contact } from "./pages/Contact/Contact"
import { Home } from "./pages/Home/Home"
import "./styles/App.css"
import { PageContext, PageProvider } from "./context/AppContext"
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
  return (
    <PageProvider>
      <Header></Header>
      <div className="media-q">
        <Navigation sidePosition={true}></Navigation>
        <main>
          <Summary></Summary>
          <PageContext.Consumer>
            {({currentPage}) => (
              <Page title={currentPage}>
                {renderSpecificPage(currentPage,pagesToNavigate)}
              </Page>
            )}
          </PageContext.Consumer>
        </main>
      </div>
    </PageProvider>
  )
}

export default App