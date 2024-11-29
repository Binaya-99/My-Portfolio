'use client';

import { Box, Typography, Grid, Chip } from '@mui/material';

const skills = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'Material-UI', 'Redux', 'TypeScript'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'PHP'] },
  { category: 'Databases', items: ['MySQL', 'MongoDB'] },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Typography variant="h6">{skill.category}</Typography>
            {skill.items.map((item, idx) => (
              <Chip key={idx} label={item} sx={{ margin: 0.5 }} />
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
