'use client';

import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({} as any);

export const ThemeProvider = ({ children }: any) => {
  // sets the default state of the theme to light
  const [theme, setTheme] = useState('light');
  // checks to see if the component has mounted
  const [isMounted, setIsMounted] = useState(false);

  // on mount, set the state of isMounted to true
  useEffect(() => {
    // sets the state of isMounted to true
    setIsMounted(true);
    // gets the current theme from local storage or sets it to light
    const storedTheme = localStorage.getItem('theme') || 'light';
    // sets the theme state to the stored theme
    setTheme(storedTheme);
  }, []);
  // if the component hasn't mounted, render a loading message
  if (!isMounted) return <>Loading...</>;

  // Writes the current theme to local storage when it changes
  const changeTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  };
  // returns the context provider with the current theme and the function to change it
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};