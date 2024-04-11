import { Button } from "../../components/Button/Button"
import { DataRow } from "../../components/DataRow/DataRow"
import { SocialMedia } from "../../components/SocialMedia/SocialMedia"
import InstagramIcon from "../../assets/svg/InstagramIcon"
import GitHubIcon from "../../assets/svg/GitHubIcon"
import LinkedInIcon from "../../assets/svg/LinkedInIcon"
import TwitterIcon from "../../assets/svg/TwitterIcon"
import './summany.css'

const socialMedia = [
    {link: 'https://www.linkedin.com/in/bryanraev/',img:<LinkedInIcon/>, name:'LinkedIn'},
    {link: 'https://www.instagram.com/is.bryanvera/',img:<InstagramIcon/>, name:'Instagram'},
    {link: 'https://github.com/isbryanvera',img:<GitHubIcon/>, name:'GitHub'},
    {link: 'https://twitter.com/Is_Bryanvera',img:<TwitterIcon/>, name:'Twitter'},
]

const data = [
    {subject: 'Phone', text: '+57 3112535030',icon: "/src/assets/gridicons_phone.svg"},
    {subject: 'Email', text: 'brayanandresveragar@gmail.com',icon: "/src/assets/mdi_email-open-outline.svg"},
    {subject: 'Location', text: 'Bogotá, Colombia',icon: "/src/assets/ion_location-outline.svg"}
]

function Summary() {
  return (
    <section className="summary">
        <div>
            <p className="summary__hook">Welcome to my portfolio, today you&apos;ll find your</p>
            <p className="summary__hook type-writing">next developer</p>
        </div>
        <div className="summary__info">
            <div className="sumary__general-info">
                <figure className="frame-profile">
                    <img className="frame-profile__img" src="/src/assets/img/profile-pic.png" alt="Placeholder" />
                </figure>
                <h1 className="summary__name">Bryan Andres Vera</h1>
                <p className="summary__rol">Frontend Developer</p>
                <div className="showcase-social-media">
                    {socialMedia.map(({name,link,img}) => {
                        return (
                            <SocialMedia key={name} link={link} img={img} name={name} />
                        )
                    })}
                </div>
            </div>

            <article className="summary__details">
                <div className="summary__contact">
                    {data.map((info) => {
                        return(
                            <DataRow key={info.subject} subject={info.subject} text={info.text} icon={info.icon}/>
                        )
                    })}
                </div>
                <Button type={'main'} text={'Download CV'}></Button>
            </article>
        </div>
    </section>
  )
}

export {Summary}