import "./Label.css";
import PropTypes from 'prop-types';

function Label({icon, title}) {
  return (
    <div className='label'>
      {icon ? <span className='label__icon'><img src={icon} alt={title} /></span> : null}
      <h3 className='label__title'>{title}</h3>
    </div>
  )
}

Label.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export { Label }
