import { Summary } from "./pages/Summary/Summary"
import { PageProvider } from "./context/AppContext"
import { Content } from "./components/Content/Content"
import { Brand } from "./components/Brand/Brand"
import Navigation from "./components/Navigation/Navigation"
import "./styles/App.css"

function App() {
  return (
    <PageProvider>
      <Brand/>
      <div className="portfolio__information">
        <Summary/>
        <Content/>
        <Navigation/>
      </div>
    </PageProvider>
  )
}

export default App