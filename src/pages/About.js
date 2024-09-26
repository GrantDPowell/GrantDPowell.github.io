import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';

function About() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom>About Me</Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Download My Resume</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            href="https://github.com/GrantDPowell/GrantDPowell.github.io/blob/main/GrantDPowellResumeGIT.pdf"
            download
          >
            View/Download Resume
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Personal Information</Typography>
          <Typography variant="body1" paragraph>
            I am a Computer Engineering graduate with a passion for technology and a keen interest in embedded systems and PCB design.
            Working on programming embedded devices and creating software applications, whether they are web-based or full-fledged PC applications, 
            is where I find my excitement in the field.
          </Typography>
          <Typography variant="body1" paragraph>
            Outside of my professional pursuits, I enjoy spending my spare time reading and diving into personal side projects.
            These projects often involve experimenting with new technologies, building custom electronics, or exploring innovative software solutions.
            I am constantly looking for opportunities to expand my knowledge and bring creative ideas to life.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
