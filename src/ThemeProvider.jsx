import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Definindo os temas
const lightTheme = {    
    background: '#ffffff',
    color: '#000000',
    buttonBackground: '#007bff',
    buttonHover: '#0056b3',
};

const darkTheme = {
    background: '#333333',
    color: '#ffffff',
    buttonBackground: '#505050',
    buttonHover: '#303030',
};

// Criando o contexto para o tema
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};