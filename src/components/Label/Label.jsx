import "./Label.css";
import PropTypes from 'prop-types';

function Label({icon, children}) {
  return (
    <div className='label'>
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
