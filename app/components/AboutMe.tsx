'use client';

import { Box, Typography, Stack, } from '@mui/material';
import { Code, Cloud } from '@mui/icons-material';
import { motion } from 'framer-motion';
import CertificatesMasonry from './CertificatesMasonry';

// Services list
const services = [
  { icon: <Code sx={{ fontSize: { xs: 30, md: 40 }, color: '#8AE99E' }} />, title: 'Website Development' },
  { icon: <Cloud sx={{ fontSize: { xs: 30, md: 40 }, color: '#8AE99E' }} />, title: 'Website Hosting' },
];

// Skills ticker
const skills = ['React', 'Next.js', 'Redux', 'HTML', 'CSS', 'JavaScript', 'Node.js'];

// Fade-in animation
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function AboutMe() {
  return (
    <Box
      sx={{
        background: '#000',
        color: '#F4F4F4',
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 10 },
        overflow: 'hidden',
      }}
    >
      {/* Skills Ticker */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          mb: { xs: 4, md: 6 },
          px: 3,
          py: 1.5,
          borderRadius: 2,
          backdropFilter: 'blur(12px)',
          background:
            'linear-gradient(90deg,rgba(0, 0, 0, 0) 0%, #8ae99f31 50%, rgba(0, 0, 0, 0) 100%)',
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        }}
      >
        <motion.div
          animate={{ x: ['-100%', '120%'] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ display: 'inline-flex', gap: 40 }}
        >
          {skills.map((skill, index) => (
            <Typography
              key={index}
              variant="h6"
              component="span"
              sx={{
                color: '#8AE99E',
                fontWeight: 'bold',
                fontSize: { xs: '15px', md: '18px' },
              }}
            >
              {skill}
            </Typography>
          ))}
        </motion.div>
      </Box>

      {/* Main Section */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 6, md: 8 }}
      >
        {/* Left Column - Services */}
        <Stack spacing={5} position="relative" sx={{ flex: 1,display:{xs:'none',md:'flex'} }}>
          <Box
            sx={{
              position: 'absolute',
              left: 18,
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: '#8AE99E',
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
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: '#8AE99E',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: 14,
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


        {/* Right Column - About */}
        <Stack spacing={4} sx={{ flex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: '#F4F4F4',
                mb: 1,
                fontSize: { xs: '28px', md: '38px' },
              }}
            >
              About Me
            </Typography>

            <Typography
              sx={{
                color: '#ccc',
                fontSize: { xs: '15px', md: '17px' },
                lineHeight: 1.7,
              }}
            >
              My journey into software development began unexpectedly—with a camera.
              Photography taught me how to frame ideas and build stories from scratch.
              That creative foundation sparked my passion for technology, where I
              discovered the same satisfaction in writing code and crafting digital
              experiences.
            </Typography>
          </motion.div>

          {/* Stats */}
          <Stack
            direction="row"
            spacing={{ xs: 4, md: 6 }}
            sx={{
              flexWrap: 'wrap',
              rowGap: { xs: 2, md: 3 },
            }}
          >
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
                  <Typography
                    sx={{
                      color: '#8AE99E',
                      fontWeight: 600,
                      fontSize: { xs: '22px', md: '28px' },
                    }}
                  >
                    {item.number}
                  </Typography>
                  <Typography
                    sx={{ color: '#ccc', fontSize: { xs: '14px', md: '16px' } }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Stack>

      {/* Certificates Masonry */}
      <Box mt={8}>
        <CertificatesMasonry />
      </Box>
    </Box>
  );
}
