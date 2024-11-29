'use client';

import { Box, Typography, Link as MuiLink, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#6a11cb',
        color: '#fff',
        padding: 2,
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 1 }}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/binaya-ray-243914157/"
          target="_blank"
          sx={{ color: '#fff' }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/Binaya-99"
          target="_blank"
          sx={{ color: '#fff' }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:binaya.ray99@gmail.com"
          sx={{ color: '#fff' }}
        >
          <Email />
        </IconButton>
      </Box>
      <Typography variant="body2">
        © {new Date().getFullYear()} Binaya Kumar Ray. All rights reserved.
      </Typography>
      <MuiLink
        href="#"
        color="inherit"
        sx={{ textDecoration: 'none', display: 'block', mt: 1 }}
      >
        Back to top
      </MuiLink>
    </Box>
  );
}
