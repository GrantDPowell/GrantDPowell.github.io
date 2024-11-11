import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
            Home
          </Typography>
          <Button color="inherit" component={Link} to="/about">
            About Me
          </Button>
          {/* <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button> */}
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
