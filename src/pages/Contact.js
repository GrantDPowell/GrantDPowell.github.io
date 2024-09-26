import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';

function Contact() {
  return (
    <Container>
      <Box sx={{ py: 5 }}>
        <Typography variant="h2" align="center" gutterBottom>Contact Me</Typography>
        <Typography variant="body1" align="center" gutterBottom>Feel free to reach out to me using the form below.</Typography>
      </Box>

      <Box component="form" action="https://formspree.io/f/xkndaedy" method="POST" sx={{ py: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth required id="name" name="name" label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth required id="email" name="email" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth required id="message" name="message" label="Message" multiline rows={5} variant="outlined" />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" color="primary" type="submit">Send Message</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact;
