import './Navigation.css'
import { Tab } from '../Tab/Tab'
import { useState } from 'react';

export default function Navigation({sidePosition}) {
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
    
    const firstTab = tabs[0].text
    const [tabSelected, setTabSelected] = useState(firstTab)
    
    return (
    <nav className={`navigation-bar ${sidePosition ? 'side-bar' : ''}`}>
        {tabs.map((tab) => (
            <Tab key={tab.text} icon={tab.icon} setTabSelected={setTabSelected} tabSelected={tabSelected} text={tab.text}/>
        ))}
    </nav>
  )
}
