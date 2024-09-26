import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import GithubProjectDisplay from '../components/GithubProjectDisplay';

function Home() {
  // Filter only specific projects for Home
  const filter = ['Integrated Lab Companion', 'This Website'];

  return (
    <Container>
      <Box sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>Grant Powell</Typography>
        <Typography variant="h4" gutterBottom>Computer Engineer</Typography>
      </Box>
      <Box sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>Highlighted Projects</Typography>
        <Grid container spacing={4}>
          <GithubProjectDisplay filter={filter} />
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
