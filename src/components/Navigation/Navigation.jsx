import './Navigation.css'
import { Tab } from '../Tab/Tab'
import { useState } from 'react';
import { AboutMeIcon } from '../../assets/svg/AboutMeIcon';
import { HomeIcon } from '../../assets/svg/HomeIcon';
import { ResumeIcon } from '../../assets/svg/ResumeIcon';
import { WorkIcon } from '../../assets/svg/WorkIcon';
import { ContactIcon } from '../../assets/svg/ContactIcon';

export default function Navigation() {
    const tabs = [
        {
            icon: <HomeIcon/>,
            alt: 'Icono Home',
            text: 'Home'
        },
        {
            icon: <AboutMeIcon/>,
            alt: 'Icono Home',
            text: 'About'
        },
        {
            icon: <ResumeIcon/>,
            alt: 'Icono Resume',
            text: 'Resume'
        },
        {
            icon: <WorkIcon/>,
            alt: 'Icono Work',
            text: 'Work'
        },
        {
            icon: <ContactIcon/>,
            alt: 'Icono Contact',
            text: 'Contact'
        }
    ];
    
    const firstTab = tabs[0].text
    const [tabSelected, setTabSelected] = useState(firstTab)
    
    return (
        <ul className='navigation-bar__list'>
            {tabs.map((tab) => (
                <Tab key={tab.text} icon={tab.icon} setTabSelected={setTabSelected} tabSelected={tabSelected} text={tab.text}/>
            ))}
        </ul>
  )
}
