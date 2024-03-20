import {PropTypes} from 'prop-types'
import './DataRow.css'

function DataRow({subject, text, icon}) {
  return (
    <div className="data">
      <span className="data__frame-icon">
        <img src={icon} alt={subject} />
      </span>
      <div className="data__info">
        <p className="data__subject">{subject}</p>
        <p className="data__text">{text}</p>
      </div>
    </div>
  )
}

DataRow.propTypes = {
  subject: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export {DataRow}