import { Summary } from "./pages/Summary/Summary"
import { PageProvider } from "./context/AppContext"
import { Content } from "./components/Content/Content"
import { Brand } from "./components/Brand/Brand"
import Navigation from "./components/Navigation/Navigation"
import "./styles/App.css"
import { SwitchMode } from "./components/SwitchMode/SwitchMode"

function App() {
  return (
    <PageProvider>
      <Brand />
      <SwitchMode />
      <div className="portfolio__information">
        <Summary />
        <main className="main__content">
          <Content />
          <Navigation />
        </main>
      </div>
    </PageProvider>
  )
}

export default App