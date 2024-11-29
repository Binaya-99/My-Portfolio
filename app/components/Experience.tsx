'use client';

import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

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
  return (
    <Box id="experience" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <Grid container spacing={4}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ backgroundColor: '#f9f9f9', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="primary">
                  {experience.role}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {experience.company} | {experience.duration}
                </Typography>
                <ul style={{ marginTop: 8, paddingLeft: 16 }}>
                  {experience.description.map((point, i) => (
                    <li key={i}>
                      <Typography variant="body2">{point}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
