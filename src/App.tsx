import { useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

function AppContent() {
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init({
      once: true,
      disableMutationObserver: true,
    });
  }, []);

  useEffect(() => {
    const refreshTimer = window.setTimeout(() => {
      AOS.refreshHard();
    }, 0);

    return () => window.clearTimeout(refreshTimer);
  }, [language]);

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

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
