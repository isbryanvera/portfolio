import "./Label.css";
import {icons} from "../../utils/variables"
import PropTypes from 'prop-types';

function Label({icon, children}) {
  const theChildrenIsIcon = icons[children.toLowerCase()]

  return (
    <div className='label'>
      {/* Condicion 1 */}
      {theChildrenIsIcon ? <span className='label__icon'><img src={theChildrenIsIcon} alt={children} /></span> : null}
      {/* Condicion 2 */}
      {icon ? <span className='label__icon'><img src={icon} alt={children} /></span> : null}
      <h3 className='label__title'>{children}</h3>
    </div>
  )
}

Label.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
}

export { Label }
