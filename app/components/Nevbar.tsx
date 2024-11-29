'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ background: '#6a11cb' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Binaya Kumar Ray
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} href="#skills">
            Skills
          </Button>
          <Button color="inherit" component={Link} href="#experience">
            Experience
          </Button>
          <Button color="inherit" component={Link} href="#projects">
            Projects
          </Button>
          <Button color="inherit" component={Link} href="#contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
