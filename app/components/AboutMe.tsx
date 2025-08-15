'use client';

import { Box, Typography, Stack } from '@mui/material';
import { Code, Cloud } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Services you offer
const services = [
  { icon: <Code sx={{ fontSize: 40, color: '#8AE99E' }} />, title: 'Website Development' },
  { icon: <Cloud sx={{ fontSize: 40, color: '#8AE99E' }} />, title: 'Website Hosting' },
];

// Skills to display in scrolling banner
const skills = ['React', 'Next.js', 'Redux', 'HTML', 'CSS', 'JavaScript', 'Node.js'];

// Animation for fade in + upward motion
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function AboutMe() {
  return (
    <Box sx={{ background: '#000', color: '#F4F4F4', py: 10, px: { xs: 2, md: 10 } }}>
      {/* Glass Scrolling Skills Header */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          mb: 6,
          px: 3,
          py: 1.5,
          backdropFilter: 'blur(12px)',
          background:
            'linear-gradient(90deg,rgba(0, 0, 0, 0) 0%, #8ae99f31 50%, rgba(0, 0, 0, 0) 100%)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
          maskImage:
            'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        }}
      >
        <motion.div
          animate={{ x: ['-100%', '140%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'inline-block' }}
        >
          {skills.map((skill, index) => (
            <Typography
              key={index}
              variant="h6"
              component="span"
              sx={{ color: '#8AE99E', mx: 3, fontWeight: 'bold' }}
            >
              {skill}
            </Typography>
          ))}
        </motion.div>
      </Box>

      {/* Main About Section */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={6}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        {/* Left Column - Services */}
        <Stack spacing={5} position="relative" sx={{ flex: 1 }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: 'absolute',
              left: 18,
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: '#8AE99E',
              zIndex: 0,
            }}
          />
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Stack direction="row" alignItems="center" spacing={2} position="relative">
                {/* Circle marker */}
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: '#8AE99E',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: 14,
                    zIndex: 2,
                  }}
                />
                <Box sx={{ pl: 4 }}>{service.icon}</Box>
                <Typography variant="h6" sx={{ color: '#F4F4F4' }}>
                  {service.title}
                </Typography>
              </Stack>
            </motion.div>
          ))}
        </Stack>

        {/* Right Column - About Text & Stats */}
        <Stack spacing={4} sx={{ flex: 2 }}>
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#F4F4F4', mb: 1 }}>
              About Me
            </Typography>
            <Typography sx={{ color: '#ccc' }}>
              My journey into software development began unexpectedly—with a camera. Photography
              taught me how to frame ideas and build stories from scratch. That creative foundation
              sparked my passion for technology, where I discovered the same satisfaction in writing
              code and crafting digital experiences. Since then, I’ve been immersed in building,
              learning, and pushing boundaries through every line of code.
            </Typography>
          </motion.div>

          {/* Stats */}
          <Stack direction="row" spacing={6}>
            {[
              { number: '12+', label: 'Completed Projects' },
              { number: '50K+', label: 'Lines of Code' },
              { number: '3+', label: 'Years of Experience' },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Box>
                  <Typography variant="h5" sx={{ color: '#8AE99E', fontWeight: 600 }}>
                    {item.number}
                  </Typography>
                  <Typography sx={{ color: '#ccc' }}>{item.label}</Typography>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
