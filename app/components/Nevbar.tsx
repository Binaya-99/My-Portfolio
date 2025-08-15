'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Box, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useColorMode } from '../layout';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'transparent',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 2, md: 6 },
            py: 1.5,
          }}
        >
          {/* Brand Name */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                letterSpacing: 1,
                background: 'linear-gradient(90deg, #8AE99E, #2FB687)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
              }}
            >
              Binaya Kumar Ray
            </Typography>
          </motion.div>

          {/* Nav Links */}
          <Box sx={{ display: 'flex', gap: { xs: 1, md: 3 }, alignItems: 'center' }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.1,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -2 }}
              >
                <Button
                  component={Link}
                  href={item.href}
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    textTransform: 'none',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      left: 0,
                      bottom: 0,
                      background: 'linear-gradient(90deg, #8AE99E, #2FB687, #8AE99E)',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover::after': { width: '100%' },
                    '&:hover': { color: '#8AE99E' },
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}

            {/* Theme Toggle Button */}
            {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <IconButton onClick={toggleColorMode} sx={{ color: theme.palette.text.primary }}>
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </motion.div> */}
          </Box>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(90deg, #8AE99E, #2FB687, #8AE99E)',
                color: 'black',
                transition: 'transform 0.3s ease',
                backgroundSize: '200% auto',
                animation: 'shimmer 2s linear infinite',
                '@keyframes shimmer': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '100%': { backgroundPosition: '200% 500%' },
                },
              }}
            >
              Let's Connect
            </Button>
          </motion.div>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}
