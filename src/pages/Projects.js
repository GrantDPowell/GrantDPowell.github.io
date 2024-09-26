import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import GithubProjectDisplay from '../components/GithubProjectDisplay';

function Projects() {
  return (
    <Container>
      <Box sx={{ py: 5 }}>
        <Typography variant="h2" align="center" gutterBottom>My Projects</Typography>
        <Typography variant="h6" align="center" gutterBottom>These projects are dynamically pulled and displayed here from my github</Typography>
      </Box>
      
      {/* Projects Section */}
      <Box sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>Technical Projects</Typography>
        <Grid container spacing={4}>
          <GithubProjectDisplay categoryType="projects" />
        </Grid>
      </Box>

      {/* Games Section */}
      <Box sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>Games</Typography>
        <Grid container spacing={4}>
          <GithubProjectDisplay categoryType="games" />
        </Grid>
      </Box>
    </Container>
  );
}

export default Projects;
