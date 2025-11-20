'use client';

import { Box, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Box
        component="footer"
        sx={{
          mt: 10,
          py: 5,
          px: 2,
          textAlign: 'center',
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #0d0d0d, #181818 60%, #0f0f0f)'
              : 'linear-gradient(135deg, #eafcef, #f8fff9 50%, #ecfdf1)',
          backdropFilter: 'blur(12px)',
          borderTop: (theme) =>
            theme.palette.mode === 'dark'
              ? '1px solid rgba(255,255,255,0.08)'
              : '1px solid rgba(0,0,0,0.1)',
        }}
      >
        {/* Social Icons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            mb: 2,
          }}
        >
          {[
            {
              icon: <LinkedIn />,
              link: 'https://www.linkedin.com/in/binaya-ray-243914157/',
            },
            {
              icon: <GitHub />,
              link: 'https://github.com/Binaya-99',
            },
            {
              icon: <Email />,
              link: 'mailto:binaya.ray99@gmail.com',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                component="a"
                href={item.link}
                target="_blank"
                sx={{
                  color: '#2FB687',
                  background: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.05)'
                      : 'rgba(0,0,0,0.05)',
                  borderRadius: 2,
                  padding: 1.2,
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: '0 0 15px rgba(47,182,135,0.6)',
                    background: 'rgba(47,182,135,0.2)',
                  },
                }}
              >
                {item.icon}
              </IconButton>
            </motion.div>
          ))}
        </Box>

        {/* Footer Text */}
        <Typography
          variant="body2"
          sx={{
            color: (theme) =>
              theme.palette.mode === 'dark'
                ? '#cfcfcf'
                : '#333',
            mb: 1,
            fontSize: '0.95rem',
          }}
        >
          © {new Date().getFullYear()} Binaya Kumar Ray • All rights reserved.
        </Typography>

        {/* Back to top */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <MuiLink
            href="#"
            color="inherit"
            underline="none"
            sx={{
              fontWeight: 500,
              fontSize: '0.95rem',
              mt: 1,
              display: 'inline-block',
              background: 'linear-gradient(90deg, #2FB687, #8AE99E)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              cursor: 'pointer',
            }}
          >
            Back to top ↑
          </MuiLink>
        </motion.div>
      </Box>
    </motion.div>
  );
}
