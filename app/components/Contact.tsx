'use client';

import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #090909, #141414)'
            : 'linear-gradient(135deg, #f7f7f7, #ffffff)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            width: '100%',
            maxWidth: 520,
            borderRadius: 4,
            backdropFilter: 'blur(14px)',
            background:
              'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow:
              '0 8px 25px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.08)',
            transition: '0.3s ease',
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            mb={3}
            fontWeight={700}
            sx={{
              color: '#8AE99E',
              letterSpacing: '0.5px',
              textShadow: '0 0 12px rgba(138, 233, 158, 0.4)',
              fontSize: { xs: '1.7rem', sm: '2rem' },
            }}
          >
            Contact Me
          </Typography>

          <motion.form
            action="https://formsubmit.co/binaya.ray99@gmail.com"
            method="POST"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ width: '100%' }}
          >
            {/* Required for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Message!"
            />
            <input
              type="hidden"
              name="_next"
              value="/success"
            />
            <input
              type="hidden"
              name="_error"
              value="/error"
            />

            {/* INPUT FIELDS */}
            <TextField
              label="Name"
              name="name"
              fullWidth
              required
              variant="outlined"
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  borderRadius: 2,
                },
              }}
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              variant="outlined"
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  borderRadius: 2,
                },
              }}
            />

            <TextField
              label="Message"
              name="message"
              fullWidth
              required
              multiline
              rows={4}
              variant="outlined"
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  borderRadius: 2,
                },
              }}
            />

            {/* SUBMIT BUTTON */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  py: 1.4,
                  fontSize: '1rem',
                  borderRadius: 3,
                  textTransform: 'none',
                  backgroundColor: '#8AE99E',
                  color: '#000',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#7EE38F',
                    boxShadow: '0 0 15px rgba(138,233,158,0.5)',
                  },
                }}
              >
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </Paper>
      </motion.div>
    </Box>
  );
}
