'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'transparent',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                letterSpacing: 1,
                background: 'linear-gradient(90deg, #8AE99E, #2FB687)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                cursor: 'pointer',
              }}
            >
              Binaya Kumar Ray
            </Typography>
          </motion.div>

          {/* Desktop Nav */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                sx={{
                  color: theme.palette.text.primary,
                  textTransform: 'none',
                  fontWeight: 500,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    left: 0,
                    bottom: 0,
                    background:
                      'linear-gradient(90deg, #8AE99E, #2FB687, #8AE99E)',
                    transition: 'width 0.3s ease-in-out',
                  },
                  '&:hover::after': { width: '100%' },
                  '&:hover': { color: '#8AE99E' },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Connect Button */}

          </Box>
          <Button
            variant="contained"
            href="https://www.linkedin.com/in/binaya-ray-243914157"
            target="_blank"
            sx={{
              background: 'linear-gradient(90deg, #8AE99E, #2FB687, #8AE99E)',
              color: 'black',
              display: { xs: 'none', md: 'flex' },
              backgroundSize: '200% auto',
              animation: 'shimmer 2s linear infinite',
              '@keyframes shimmer': {
                '0%': { backgroundPosition: '0% 50%' },
                '100%': { backgroundPosition: '200% 500%' },
              },
            }}
          >
            Let’s Connect
          </Button>
          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: theme.palette.text.primary }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 260,
            height: '100%',
            backgroundColor: theme.palette.background.default,
            p: 2,
          }}
        >
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Mobile Nav Links */}
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={toggleDrawer}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: theme.palette.text.primary,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Connect Button for Mobile */}
            <ListItem disablePadding sx={{ mt: 2 }}>
              <ListItemButton
                component="a"
                href="https://www.linkedin.com/in/binaya-ray-243914157"
                target="_blank"
                sx={{
                  background:
                    'linear-gradient(90deg, #8AE99E, #2FB687, #8AE99E)',
                  color: 'black',
                  borderRadius: 2,
                  textAlign: 'center',
                }}
              >
                <ListItemText
                  primary="Let's Connect"
                  primaryTypographyProps={{
                    sx: { fontWeight: 600 },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </motion.div>
  );
}
