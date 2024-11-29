'use client';

import { Box, Typography, Button } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        color: '#fff',
        padding: 4,
      }}
    >
      <Typography variant="h2">Hi, I'm Binaya Kumar Ray</Typography>
      <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
        MERN Stack Developer | Next.js Enthusiast | Material-UI Designer
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ textTransform: 'none' }}
        href="#projects"
      >
        View My Work
      </Button>
    </Box>
  );
}
