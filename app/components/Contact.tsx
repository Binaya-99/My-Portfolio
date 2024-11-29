'use client';

import { Box, Typography, TextField, Button } from '@mui/material';

export default function Contact() {
  return (
    <Box id="contact" sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form action="https://formsubmit.co/your-email" method="POST">
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Box>
  );
}
