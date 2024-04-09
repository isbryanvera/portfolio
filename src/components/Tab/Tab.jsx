import { useContext } from 'react'
import { PageContext } from '../../context/AppContext'
import { PropTypes } from 'prop-types'
import './Tab.css'

function Tab({icon, text, setTabSelected, tabSelected}) {

  const currentTab = tabSelected === text
  const { setCurrentPage } = useContext(PageContext)

  return (
    <div className={`tab ${currentTab ? 'tab--selected' : ''}`} 
          onClick={() => {
            setCurrentPage(text)
            setTabSelected(text)
          }}>
          <span className="tab__icon">
              <img src={icon} alt={`Icono para la pestaña ${text}`} />
          </span>
          <p className={`tab__text ${currentTab ? 'tab__text--selected' : ''}`}>{text}</p>
      </div>
  )
}

Tab.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export { Tab }