import './Navigation.css'
import { Tab } from '../Tab/Tab'

export default function Navigation() {

    const tabs = [
        {
            icon: '/src/assets/Home icon.svg',
            alt: 'Icono Home',
            text: 'Home'
        },
        {
            icon: '/src/assets/resume icon.svg',
            alt: 'Icono Resume',
            text: 'Resume'
        },
        {
            icon: '/src/assets/work icon.svg',
            alt: 'Icono Work',
            text: 'Work'
        },
        {
            icon: '/src/assets/contact icon.svg',
            alt: 'Icono Contact',
            text: 'Contact'
        }
    ];
  return (
    <nav className='navigation-bar'>
        {tabs.map((tab) => (
            <Tab key={tab.text} icon={tab.icon} text={tab.text} />
        ))}
    </nav>
  )
}
