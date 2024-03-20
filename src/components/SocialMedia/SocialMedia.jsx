import { PropTypes } from 'prop-types'
import './SocialMedia.css'

function SocialMedia({link, name, img}) {
  return (
    <div className='social-media__button'>
      <a href={link} target="_blank" rel="noreferrer">
        <img className='social-media__icon' src={img} alt={name} />
      </a>
    </div>
  )
}

SocialMedia.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export {SocialMedia}