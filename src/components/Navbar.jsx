import React from 'react';
import { AppBar, Box, Button, Container, Hidden, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontSize: '1.125rem',
      padding: 12,
      color: isActive ? '#ad5389' : 'white',
      fontWeight: isActive ? 800 : 600,
      textDecoration: isActive ? 'underline' : 'none'
    };
  };
  return (
    <AppBar position="sticky" elevation={0} sx={{ background: '#240b36' }}>
      <Container maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/**MenuIcon */}
            <Hidden smUp>
              <IconButton>
                <MenuIcon sx={{ color: 'white' }} fontSize="large" />
              </IconButton>
            </Hidden>
            {/**Logo */}
            <Hidden smDown>
              <Typography variant="h5" color="primary.main">
                LBSP
              </Typography>
            </Hidden>
          </Box>
          {/**Menu-items */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Hidden mdDown>
              <NavLink to="/" style={navLinkStyles}>
                Home
              </NavLink>
              <NavLink to="/lend" style={navLinkStyles}>
                Lend
              </NavLink>
              <NavLink to="/borrow" style={navLinkStyles}>
                Borrow
              </NavLink>
              <NavLink to="/stake" style={navLinkStyles}>
                Stake
              </NavLink>
              <NavLink to="/payoff" style={navLinkStyles}>
                PayOff
              </NavLink>
            </Hidden>
          </Box>
          {/**Login Button */}
          <Button variant="contained">Login with MetaMask</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
