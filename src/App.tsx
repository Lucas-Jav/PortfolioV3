import { useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            light: '#FAFAFA',
            main: '#FFD0D0',
            dark: '#EE7070',
            contrastText: '#FFD0D0',
          },
          secondary: {
            light: '#757ce8',
            main: '#ee7070',
            dark: '#ee7070',
            contrastText: '#fff',
          },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
