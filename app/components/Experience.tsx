'use client';

import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'System Engineer',
    duration: '02/2025 - Present',
    description: [
      'Working on Apple’s internal enterprise ecosystem with a focus on scalable, high-quality systems.',
      'Collaborating with cross-functional engineering teams to ensure smooth system operations.',
      'Supporting automation workflows and improving internal processes for better efficiency.',
    ],
  },
  {
    company: 'Smartters Software Pvt. Ltd.',
    role: 'Web Developer',
    duration: '09/2022 - 01/2025',
    description: [
      'Developed Binimise, a multi-area waste management system, increasing operational efficiency by 30%.',
      'Designed and implemented Enfix, an amusement park management system with 50% boosted positive feedback.',
      'Led development of an AutoCAD project management system with a 25% performance boost.',
    ],
  },
  {
    company: 'Hyscaler',
    role: 'Junior Technical Programmer',
    duration: '12/2021 - 08/2022',
    description: [
      'Built cloud-based EMR & fertility management systems with scheduling and billing improvements.',
    ],
  },
  {
    company: 'Smartters Software (Internship)',
    role: 'React.js Developer Intern',
    duration: '02/2021 - 04/2021',
    description: [
      'Built interactive and responsive UI components using React.js.',
      'Collaborated with designers to ship user-friendly interfaces.',
    ],
  },
  {
    company: "Lecture's Note",
    role: 'Flutter Developer Intern',
    duration: '06/2019 - 07/2019',
    description: [
      'Developed basic mobile UI components using Flutter & Dart.',
      'Implemented layouts, navigation, and stateful widgets for demo applications.',
    ],
  },
];


export default function Experience() {

  return (
    <Box
      id="experience"
      sx={{
        px: { xs: 2, md: 6 },
        py: 10,
        backgroundColor: '#000',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          mb: 6,
          color: '#8AE99E',
          fontWeight: 700,
          textShadow: '0 0 12px rgba(138, 233, 158, 0.4)',
          letterSpacing: '0.5px',
        }}
      >
        Experience
      </Typography>

      <Grid container spacing={4}>
        {experiences.map((exp, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 30px rgba(138, 233, 158, 0.3)',
              }}
              style={{ borderRadius: 16 }}
            >
              <Card
                sx={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(138,233,158,0.25)',
                  borderRadius: 3,
                  height: '100%',
                  padding: '4px',
                  transition: '0.3s ease',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#8AE99E',
                      fontWeight: 600,
                      fontSize: '1.15rem',
                      mb: 0.5,
                    }}
                  >
                    {exp.role}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#ccc', mb: 1.5, fontSize: '0.95rem' }}
                  >
                    {exp.company} &nbsp; | &nbsp; {exp.duration}
                  </Typography>

                  <ul style={{ paddingLeft: '1.25rem', marginTop: 8 }}>
                    {exp.description.map((point, i) => (
                      <li key={i} style={{ marginBottom: 6 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: '#ddd', lineHeight: 1.55 }}
                        >
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
