import PropTypes from 'prop-types';
import './Card.css';

function Card({icon, title, text}) {
    return (
      <div className='card'>
        <div className='card__header'>
          <span className='card__icon'>
            <img src={icon} alt={title} />
          </span>
          <h3 className='card__title'>{title}</h3>
        </div>
        <p className='card__text'>{text}</p>
      </div>
    )
  }

  Card.defaultProps = {
    isActive: false
  }

  Card.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  export { Card }