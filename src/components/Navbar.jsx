import React from 'react';
import { AppBar, Box, Button, Container, Hidden, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggle } from '../features/toggleMenuSlice';
import DrawerComponent from './DrawerComponent';
const Navbar = () => {
  const dispatch = useDispatch();
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
    <AppBar position="sticky" elevation={1} sx={{ background: '#240b36' }}>
      <Container maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/**MenuIcon */}
            <Hidden mdUp>
              <IconButton
                onClick={() => {
                  dispatch(toggle());
                }}
              >
                <MenuIcon sx={{ color: 'white' }} fontSize="large" />
              </IconButton>
            </Hidden>
            {/**Logo */}
            <Hidden mdDown>
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
              <NavLink to="/payoff" style={navLinkStyles}>
                PayOff
              </NavLink>
              <NavLink to="/stake" style={navLinkStyles}>
                Stake
              </NavLink>
              <Button variant="contained" sx={{ marginLeft: 10, textTransform: 'capitalize' }}>
                Send / Receive
              </Button>
            </Hidden>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" align="center" color="primary">
              Wallet Connected
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 900 }} align="center" color="gray">
              {'0xbd3fb2331b797fa0d741abda91c1c3b027bd91f9'.slice(0, 4)}...
              {'0xbd3fb2331b797fa0d741abda91c1c3b027bd91f9'.slice(35)}
            </Typography>
          </Box>
        </Toolbar>
        <DrawerComponent />
      </Container>
    </AppBar>
  );
};

export default Navbar;
