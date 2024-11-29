'use client';

import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const projects = [
  {
    title: 'Binimise',
    description:
      'Multi-area waste management system with geofencing, live tracking, and authentication.',
    link: 'https://app.binimise.com/login/',
  },
  {
    title: 'Enfix',
    description:
      'Amusement park management system with geofencing and full-stack development.',
    link: 'https://app.enfix.io/login/',
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.link} target="_blank">
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
