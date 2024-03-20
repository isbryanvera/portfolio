import { Summary } from "./components/Summary/Summary"
import { Page } from "./components/Page/Page"
import { Header } from "./components/Header/Header"
import { AboutMe } from "./components/AboutMe/AboutMe"
import "./App.css"

const currentPage = "About Me"

function navigation(page) {
  if (page === "About Me") {
    return <AboutMe></AboutMe>
  } else {
    return <AboutMe></AboutMe>
  }
}

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Summary></Summary>
        <Page title={currentPage}>
          {navigation(currentPage)}
        </Page>
      </main>
    </>
  )
}

export default App