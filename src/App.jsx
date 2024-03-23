import { Summary } from "./components/Summary/Summary"
import { Page } from "./components/Page/Page"
import { Header } from "./components/Header/Header"
import { AboutMe } from "./components/AboutMe/AboutMe"
import { Resume } from "./components/Resume/Resume"
import {useState} from 'react'
import "./App.css"

function navigation(page) {
  if (page === "Home") {
    return <AboutMe></AboutMe>
  } else {
    return <Resume></Resume>
  }
}

function App() {
  const [page,setPage] = useState('Home'); // Valor por defecto del estado la primera vez que se renderiza el componente
  console.log(page)

  return (
    <>
      <Header></Header>
      <main>
        <Summary></Summary>
        <Page title={page} page={page} setPage={setPage}>
          {navigation(page)}
        </Page>
      </main>
    </>
  )
}

export default App