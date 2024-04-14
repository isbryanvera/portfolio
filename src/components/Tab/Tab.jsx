import { useContext } from 'react'
import { PageContext } from '../../context/AppContext'
import { PropTypes } from 'prop-types'
import './Tab.css'

function Tab({icon, text, setTabSelected, tabSelected}) {

  const currentTab = tabSelected === text
  const { setCurrentPage } = useContext(PageContext)

  return (
    <li className={`tab ${currentTab ? 'tab--selected' : ''}`} 
          onClick={() => {
            setCurrentPage(text)
            setTabSelected(text)
          }}>
          <span className={`tab__icon ${currentTab ? 'tab__text--selected' : ''}`}>
              {icon}
          </span>
          <a className={`tab__text ${currentTab ? 'tab__text--selected' : ''}`}>{text}</a>
      </li>
  )
}

Tab.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export { Tab }