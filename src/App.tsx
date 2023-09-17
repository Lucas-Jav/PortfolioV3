import { useState, useMemo, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

type ThemeMode = 'light' | 'dark';

export default function App() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const themeStorage = localStorage.getItem('theme');
    if(themeStorage === 'dark') return 'dark';
    else return 'light';
  });


  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        localStorage.setItem('theme', mode === 'light' ? 'dark' : 'light');
      },
    }),
    [],
  );

  

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Home colorModeContext={ColorModeContext}/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


