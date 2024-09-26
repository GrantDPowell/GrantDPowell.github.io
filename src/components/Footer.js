import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" sx={{ mt: 'auto', backgroundColor: '#282c34' }}>
      <Container>
        <Toolbar>
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            &copy; 2024 Grant Powell. All rights reserved.
          </Typography>
          <Button color="inherit" href="https://www.linkedin.com/in/grant-powell-778405203/">
            LinkedIn
          </Button>
          <Button color="inherit" href="https://github.com/GrantDPowell">
            GitHub
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
