'use client';

import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
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
    company: 'Smartters Software Pvt. Ltd.',
    role: 'Web Developer',
    duration: '09/2022 - Present',
    description: [
      'Developed Binimise, a multi-area waste management system, increasing operational efficiency by 30%.',
      'Designed and implemented Enfix, an amusement park management system, achieving a 50% increase in positive feedback.',
      'Led the development of a project management system for AutoCAD designs, improving system performance by 25%.',
    ],
  },
  {
    company: 'Hyscaler',
    role: 'Junior Technical Programmer',
    duration: '12/2021 - 08/2022',
    description: [
      'Built a cloud-based EMR and fertility record system, enhancing clinic operations with scheduling and billing improvements.',
    ],
  },
  {
    company: 'Smartters Software (Internship)',
    role: 'React.js Developer Intern',
    duration: '02/2021 - 04/2021',
    description: [
      'Built interactive and responsive UI components using React.js.',
      'Collaborated with the design team to implement user-friendly interfaces.',
    ],
  },
];

export default function Experience() {
  const theme = useTheme();

  return (
    <Box
      id="experience"
      sx={{
        px: { xs: 2, md: 6 },
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: 'center', mb: 6, color: '#8AE99E', fontWeight: 600 }}
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
              whileHover={{ scale: 1.02 }}
            >
              <Card
                sx={{
                  background: '#121212',
                  border: '1px solid rgba(138, 233, 158, 0.2)',
                  boxShadow: '0 0 15px rgba(138, 233, 158, 0.1)',
                  borderRadius: 3,
                  height: '100%',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ color: '#8AE99E', fontWeight: 600 }}
                  >
                    {exp.role}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#ccc', mb: 1 }}
                  >
                    {exp.company} &nbsp; | &nbsp; {exp.duration}
                  </Typography>
                  <ul style={{ paddingLeft: '1.25rem', marginTop: 8 }}>
                    {exp.description.map((point, i) => (
                      <li key={i}>
                        <Typography
                          variant="body2"
                          sx={{ color: '#ddd', lineHeight: 1.6 }}
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
