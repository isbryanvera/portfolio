import { PropTypes } from 'prop-types'
import './SocialMedia.css'

function SocialMedia({link, name, img}) {
  return (
    // <div className='social-media__button'>
    //   <a href={link} target="_blank" rel="noreferrer">
    //     <img className='social-media__icon' src={img} alt={name} />
    //   </a>
    // </div>

    <div className="icon-content">
    <a
      href={link}
      aria-label="Spotify"
      data-social={name}
    >
      <div className="filled"></div>
      {img}
    </a>
    <div className="tooltip">{name}</div>
    </div>
  )
}

SocialMedia.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.element.isRequired
}

export {SocialMedia}