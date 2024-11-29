'use client';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './globals.css';
import Navbar from './components/Nevbar';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: { main: '#6a11cb' },
    secondary: { main: '#1976d2' },
    background: { default: '#f9f9f9' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
