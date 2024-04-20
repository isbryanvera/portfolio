import { Button } from "../../components/Button/Button"
import { SocialMedia } from "../../components/SocialMedia/SocialMedia"
import InstagramIcon from "../../assets/svg/InstagramIcon"
import GitHubIcon from "../../assets/svg/GitHubIcon"
import LinkedInIcon from "../../assets/svg/LinkedInIcon"
import TwitterIcon from "../../assets/svg/TwitterIcon"
import { DownloadIcon } from "../../assets/svg/DownloadIcon"
import { EmailIcon } from "../../assets/svg/EmailIcon"
import './summany.css'
import { Quote } from "../../components/Quote/Quote"

const socialMedia = [
    {link: 'https://www.linkedin.com/in/bryanraev/',img:<LinkedInIcon/>, name:'LinkedIn'},
    {link: 'https://www.instagram.com/is.bryanvera/',img:<InstagramIcon/>, name:'Instagram'},
    {link: 'https://github.com/isbryanvera',img:<GitHubIcon/>, name:'GitHub'},
    {link: 'https://twitter.com/Is_Bryanvera',img:<TwitterIcon/>, name:'Twitter'},
]

function Summary() {
  return (
    <section className="summary">
            <div className="sumary__general-info">
                <div className="helper-container-flex">
                    <figure className="frame-profile">
                        <img className="frame-profile__img" src="/src/assets/img/profile-pic.png" alt="Placeholder" />
                    </figure>
                    <div className="helper-container-flex">
                        <div className="personal-information">
                            <h1 className="summary__name">Bryan Vera</h1>
                            <p className="summary__rol">Frontend Developer</p>
                        </div>
                        <Quote>
                            {/* Specializing in strategy, improving design maturity & design systems. */}
                        </Quote>
                    </div>
                </div>
                
                <div className="helper-container-flex summary__details-call-to-action">
                    <div className="call-to-actions">
                        <Button type={'primary'} text={'Hire Me'} icon={<EmailIcon/>} ></Button>
                        <Button type={'secondary'} text={'Download CV'} icon={<DownloadIcon/>} ></Button>
                    </div>
                    <div className="showcase-social-media">
                        {socialMedia.map(({name,link,img}) => {
                            return (
                                <SocialMedia key={name} link={link} img={img} name={name} />
                            )
                        })}
                    </div>
                </div>
        </div>
    </section>
  )
}

export {Summary}