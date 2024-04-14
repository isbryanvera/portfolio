import { useEffect, useState } from 'react';
import './SwitchMode.css';

const SwitchMode = () => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function handleTheme(themeName) {
    themeName === 'light' ? setTheme('dark') : setTheme('light');
    // changeTheme();
  }

  // function changeTheme() {
  //   if (theme === 'light') {
  //     document.body.style = "background-color: var(--bs-dark);transition: 0.5s;";
  //     document.getElementById('theme-icon').src = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
  //   }else{
  //     document.body.style = "background-color: linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%);transition: 0.5s;";
  //     document.getElementById('theme-icon').src = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
  //   }
  // }

  return (
    <div className="theme-container shadow-dark" onClick={ () => handleTheme(theme)}>
      <img id="theme-icon"    src="https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg" alt="ERR"/>
    </div>
  );
};

export { SwitchMode };
