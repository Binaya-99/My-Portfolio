'use client';

import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SpeedIcon from '@mui/icons-material/Speed';
import FloatingChip from './FloatingChip';

// Floating chip with floating/revolving motion


export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#000',
        color: '#fff',
        padding: 4,
        overflow: 'hidden',
      }}
    >
      {/* Animated Floating Chips */}
      {/* <FloatingChip
        text="Mobile App Development"
        icon={<MobileFriendlyIcon fontSize="small" />}
        color="#1EC28B"
        initialX={50}
        initialY={100}
      />
      <FloatingChip
        text="UI/UX Design"
        icon={<DesignServicesIcon fontSize="small" />}
        color="#1D2B53"
        initialX={200}
        initialY={300}
      />
      <FloatingChip
        text="MVP Development"
        icon={<SpeedIcon fontSize="small" />}
        color="#942C44"
        initialX={-150}
        initialY={450}
      /> */}

      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ width: '50%', zIndex: 2, textAlign: 'left' }}
      >
        <Typography
          variant="h2"
          sx={{
            width: '60%',
            wordSpacing: '30px',
            fontWeight: 600,
            background: 'linear-gradient(90deg, #8AE99E, #2FB687, #8AE99E)',
            backgroundSize: '200% auto',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            animation: 'shimmer 2s linear infinite',
            '@keyframes shimmer': {
              '0%': { backgroundPosition: '0% 50%' },
              '100%': { backgroundPosition: '200% 500%' },
            },
          }}
        >
          Full-Stack Developer
        </Typography>

        <Typography variant="body1" width="90%" fontWeight={600} sx={{ mt: 2, mb: 4 }}>
          Building digital experiences that merge creativity with technology. Specializing in modern web development and cyber systems.
        </Typography>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="outlined"
            sx={{
              // background: 'linear-gradient(90deg, #8AE99E, #2FB687, #8AE99E)',
              color: '#8AE99E',
              transition: 'transform 0.3s ease',
              backgroundSize: '200% auto',
              animation: 'shimmer 2s linear infinite',
              '@keyframes shimmer': {
                '0%': { backgroundPosition: '0% 50%' },
                '100%': { backgroundPosition: '200% 500%' },
              },
            }}
            onClick={() => {
              window.open('/My-Resume.pdf', '_blank');
            }}
          >
            My resume
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
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
            zIndex={2}
            sx={{
              width: 350,
              height: 350,
              borderRadius: '50%',
              border: '3px solid #00ff9d',
              boxShadow: '0 0 30px #00ff9d',
              background: 'black',
              transition: 'transform 0.3s ease',
              overflow: 'hidden',
              animation: 'shimmer 2s linear infinite',
              '@keyframes shimmer': {
                '0%': { backgroundPosition: '0% 50%' },
                '100%': { backgroundPosition: '200% 50%' },
              },
            }}
          >
            <img
              src="/my-image3.png"
              alt="Your Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
        </motion.div>
      </motion.div>

      {/* Background SVG */}
      <motion.img
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        style={{ position: 'absolute', left: 0 }}
        src="/Group 1332.svg"
        alt=""
      />
    </Box>
  );
}
