import './Tab.css'
import { PropTypes } from 'prop-types'

function Tab({icon, text}) {
  return (
    <div className="tab">
        <span className="tab__icon">
            <img src={icon} alt={`Icono para la pestaña ${text}`} />
        </span>
        <p className="tab__text">{text}</p>
    </div>
  )
}

Tab.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export { Tab }