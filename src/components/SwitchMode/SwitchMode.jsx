import { useEffect, useState } from 'react';
import './SwitchMode.css';
import { MoonIcon } from '../../assets/svg/MoonIcon';
import { SunIcon } from '../../assets/svg/SunIcon';

const SwitchMode = () => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function handleTheme(themeName) {
    themeName === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className="theme-container shadow-dark" onClick={ () => handleTheme(theme)}>
      {theme === 'light' ? <MoonIcon/> : <SunIcon/>}
    </div>
  );
};

export { SwitchMode };
