'use client';

import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import FloatingChip from './FloatingChip';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 'auto', md: '100vh' },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        justifyContent: { xs: 'center', md: 'space-between' },
        background: '#000',
        color: '#fff',
        px: { xs: 2, md: 8 },
        py: { xs: 8, md: 0 },
        overflow: 'hidden',
        gap: { xs: 6, md: 0 },
      }}
    >
      {/* Floating Chips - Responsive Repositioning */}
      {!isMobile && (
        <>
          <FloatingChip
            text="Web Development"
            icon={<LanguageOutlinedIcon fontSize="small" />}
            color="#1EC28B"
            initialX={50}
            initialY={80}
          />
          <FloatingChip
            text="MVP Development"
            icon={<SpeedIcon fontSize="small" />}
            color="#942C44"
            initialX={150}
            initialY={200}
          />
        </>
      )}

      {/* LEFT TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{
          width: isMobile ? '100%' : '50%',
          textAlign: isMobile ? 'center' : 'left',
          zIndex: 2,
        }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h2'}
          sx={{
            fontWeight: 700,
            width: isMobile ? '100%' : '80%',
            background: 'linear-gradient(90deg, #8AE99E, #2FB687, #8AE99E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% auto',
            animation: 'shimmer 2s linear infinite',
            '@keyframes shimmer': {
              '0%': { backgroundPosition: '0% 50%' },
              '100%': { backgroundPosition: '200% 50%' },
            },
          }}
        >
          Full-Stack Developer
        </Typography>

        <Typography
          variant="body1"
          fontWeight={600}
          sx={{
            mt: 2,
            mb: 4,
            width: isMobile ? '100%' : '90%',
            // mx: 'auto',
            // fontSize: { xs: '0.95rem', md: '1.1rem' },
          }}
        >
          Building digital experiences that merge creativity with technology.
          Specializing in modern web development and scalable systems.
        </Typography>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: 'inline-block' }}
        >
          <Button
            variant="outlined"
            sx={{
              color: '#8AE99E',
              borderColor: '#8AE99E',
              px: 3,
              py: 1,
              borderRadius: '10px',
              fontSize: { xs: '0.9rem', md: '1rem' },
              '&:hover': {
                borderColor: '#2FB687',
                color: '#2FB687',
              },
            }}
            onClick={() => window.open('/My-Resume.pdf', '_blank')}
          >
            My Resume
          </Button>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ zIndex: 2 }}
      >
        <motion.div
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <Box
            sx={{
              width: { xs: 225, sm: 260, md: 350 },
              height: { xs: 225, sm: 260, md: 350 },
              borderRadius: '50%',
              border: '3px solid #00ff9d',
              boxShadow: '0 0 30px #00ff9d',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/my-image3.png"
              alt="Profile"
              width={350}
              height={350}
              priority
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>

        </motion.div>
      </motion.div>

      {/* Background SVG */}
      {!isMobile && (
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
          src="/Group 1332.svg"
          alt="background"
        />
      )}
    </Box>
  );
}
