'use client';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { createContext, useMemo, useState, useContext } from 'react';
import './globals.css';
import Navbar from './components/Nevbar';
import Footer from './components/Footer';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import CustomCursor from './components/CustomCursor';

// Create context
const ColorModeContext = createContext({ toggleColorMode: () => {} });

// Theme settings function
const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: { main: '#8AE99E' },
      secondary: { main: '#2FB687' },
      background:
        mode === 'dark'
          ? { default: '#000000', paper: '#121212' }
          : { default: '#f7f7f7', paper: '#ffffff' },
      text:
        mode === 'dark'
          ? { primary: '#ffffff', secondary: '#cfcfcf' }
          : { primary: '#000000', secondary: '#333333' },
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      h1: { fontFamily: 'Poppins, sans-serif', fontWeight: 700 },
      h2: { fontFamily: 'Poppins, sans-serif', fontWeight: 600 },
      h3: { fontFamily: 'Poppins, sans-serif', fontWeight: 500 },
      button: { fontFamily: 'Poppins, sans-serif', fontWeight: 500, textTransform: 'none' },
    },
  });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
      },
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <html lang="en">
      <body>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <CustomCursor />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}

// Export hook for easy usage in Navbar
export const useColorMode = () => useContext(ColorModeContext);
