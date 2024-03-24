import PropTypes from 'prop-types';
import './Card.css';
import { Label } from '../Label/Label';

function Card({icon, title, text}) {
    return (
      <div className='card'>
        <Label icon={icon} title={title}/>
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