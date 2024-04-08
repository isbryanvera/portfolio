import { PageContext } from '../../context/AppContext'
import './Tab.css'
import { PropTypes } from 'prop-types'

function Tab({icon, text, setTabSelected, tabSelected}) {

  const currentTab = tabSelected === text

  return (
    <PageContext.Consumer>
      {({
        setCurrentPage
      }) => (

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
    )}
    </PageContext.Consumer>
  )
}

Tab.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export { Tab }