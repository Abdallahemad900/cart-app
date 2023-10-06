import React, { useState } from 'react';

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
    if (!darkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkTheme ? 'Light Theme' : 'Dark Theme'}
    </button>
  );
};

export default ThemeToggle;
