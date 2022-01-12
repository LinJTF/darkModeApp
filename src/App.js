import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyle } from './global';
import Toggle from './components/Toggle';

function App() {

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
        <footer>
        <span>Credits:</span><br/>
          <small><b>Sun</b> icon made by <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small><br/>
          <small><b>Moon</b> icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>  
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;
  