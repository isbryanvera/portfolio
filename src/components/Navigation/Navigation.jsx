import './Navigation.css'
import { Tab } from '../Tab/Tab'
import { useState } from 'react';
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
    <nav className={`navigation-bar`}>
        {tabs.map((tab) => (
            <Tab key={tab.text} icon={tab.icon} setTabSelected={setTabSelected} tabSelected={tabSelected} text={tab.text}/>
        ))}
    </nav>
  )
}
