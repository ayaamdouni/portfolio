import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
    document.body.classList.toggle('dark', currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme); // Save the theme in local storage
  };

  return (
    <button 
    onClick={toggleTheme} 
    className=" text-white rounded">
        <img src={theme === 'light' ? '/icons/light.png' : '/icons/dark.png'}
        alt='light mode'
        className='h-8'/>
      {/* {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'} */}
    </button>
  );
};

export default ThemeToggle;
